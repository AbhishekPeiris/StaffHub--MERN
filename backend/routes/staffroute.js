const router = require("express").Router();
const Staff = require('../models/staff');

router.route('/home').get(async(req, res) => {

    try {
        
        const allStaffmembers = await Staff.find();
        return res.status(200).json({status: "All members are fetched" , allStaffmembers});

    } catch (error) {
        
        return res.status(400).json({message : error});
    }
});

router.route('/home/:id').post(async(req, res) => {

    const staffId = req.params.id;

    try {
    
        const staffMember = await Staff.findById(staffId);
        return res.status(200).json({status : "Staff member fatched", staffMember});

    } catch (error) {
        
        return res.status(400).json({status : "Error with get staff member ", message : error});
    }
});

router.route('/createstaffmember').post(async(req, res) => {

    const {firstname, lastname, email, contact, dob, username, password, imageurl} = req.body;

    const newStaffMember = new Staff({

        firstname,
        lastname,
        email,
        contact,
        dob,
        username,
        password,
        imageurl
    });

    try {

        await newStaffMember.save();
        return res.status(200).json({status : "Staff member is added"});
        
    } catch (error) {
        
        return res.status(400).json({status : "Error with add staff member", message : error});
    }
});

router.route('/updatestaffmember/:id').put(async(req, res) => {

    const staffId = req.params.id;
    const {firstname, lastname, email, contact, dob, username, password, imageurl} = req.body;

    const updateStaffMember = {

        firstname,
        lastname,
        email,
        contact,
        dob,
        username,
        password,
        imageurl 
    };

    try {
        
        await Staff.findByIdAndUpdate(staffId, updateStaffMember);
        return res.status(200).json({status : "Staff member updated"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with update staff member", message : error});
    }

});

router.route('/deletestaffmember/:id').delete(async(req, res) => {

    const staffId = req.params.id;

    try {
        
        await Staff.findByIdAndDelete(staffId);
        return res.status(200).json({status : "Staff member deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete staff member", message : error});
    }
});

module.exports = router;