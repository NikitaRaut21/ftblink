import Link from "./../models/Link.js"

const PostLink=async(req,res)=>{
    const {target,slug,title}=req.body;

    const link = new Link({
     target,
     slug,
     title

    })
    const SavedLink = await link.save();
    res.json({
        success:true,
        message :`link created successfully...`,
        data:SavedLink
    })
}
const  getSlugRedirect =async(req,res)=>{
const {slug} =req.params
const link= await Link.findOne({slug});
if(!link){
     return res.json({
        success:false,
        message:"Link not found"
        })
}
link.views=link.views+1;
await link.save();
res.redirect(link.target)
}
const getallLink =async(req,res)=>{
    const links= await Link.find()
    res.json({
        success:true,
        message:"all link fetch successfully",
        data:links
    })
}

export{PostLink,getSlugRedirect ,getallLink};