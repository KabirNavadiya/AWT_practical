const PersonalInfo = require('../models/personalinfo');

//create a new personal info entry
async function createPersonalInfo(req,res){
    const{name,age,email}= req.body;
    try{
        const newInfo = new PersonalInfo({name,age,email});
        await newInfo.save();
        res.status(201).json(newInfo);
    }
    catch(error){
    res.status(500).json({error:'could not create personal info entry'});
    }   
}

async function updatePersonalInfo(req,res){
    const {name,age,email}=req.body;
    try{
        const updatedInfo = await PersonalInfo.findByIdAndUpdate(
            req.param.id,
            {name,age,email},
            {new:true}
        );
        res.json(updatedInfo);
    }
    catch(error){
        res.status(500).json({error:'Could not update personal info '});
    }
}
module.exports = {
    createPersonalInfo,
    updatePersonalInfo

}