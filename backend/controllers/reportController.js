const Report=require('../models/Report');

const getReports = async(req,res) =>{

try{

    const reports = await Report.find({userId:req.user.id});

    res.json(tasks);
}catch(error){

res.status(500).json({message:error.message});
    
}
};

const addReport = async(req,res)=>{
const{title,description,deadline} = req.body;
try{
    const report = await Report.create({userId:req.user.id,title,description,deadline});
    res.status(201).json(report);
}catch(error){
    res.status(500).json({message:error.message})
}
};

const updateReport = async(req,res)=>{
    const{title,description,completed,deadline} = req.body;
    try{
        const report = await Report.findById(req.params.id);
        if(!report)return res.status(404),json({message:'Report not found'});

        report.title = title||report.title;
        report.context = description||report.context;
        report.completed = completed??report.completed;
        report.deadline = deadline||report.deadline;

        const updatedReport = await report.save();
        //res.json(updateReport);
        res.json(updatedReport);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const deleteReport = async(req,res)=>{
    try{
        const report=await Report.findById(req.params.id);
        if(!report)return res.status(404).json({message:'Report not found'});

        await report.remove();
        res.json({message:'Report deleted'});
    }catch(error){
    res.status(500).json({message:error.message});
    }
};


module.exports = {getReports,addReport,updateReport,deleteReport}