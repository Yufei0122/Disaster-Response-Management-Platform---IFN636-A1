const Report=require('../models/Report');

const getReports = async(req,res) =>{

try{

    const reports = await Report.find({userId:req.user.id});

    res.json(reports);
}catch(error){

res.status(500).json({message:error.message});
    
}
};

const addReport = async(req,res)=>{
const{title,date,address,description} = req.body;
try{
    const report = await Report.create({userId:req.user.id,title,description,date,address});
    res.status(201).json(report);

}catch(error){
    res.status(500).json({message:error.message})
}
};

const updateReport = async(req,res)=>{
    const{title,description,address,date} = req.body;
    try{
        const report = await Report.findById(req.params.id);
        if(!report)return res.status(404),json({message:'Report not found'});

        report.title = title||report.title;
        report.description = description||report.description;
        report.address = address||report.address;
        report.date = date||report.date;

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