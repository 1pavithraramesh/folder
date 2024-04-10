let nodemailer=require('nodemailer')
//ccatvgnhjxsbxyof
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'nandrupavithra50@gmail.com',
        pass:'fnytkufdnpfftosx'
    },
    tls:{
        rejectUnauthorized:false
    }
})

let maioption={
    from:'nandrupavithra50@gmail.com',
    to: 'waseemahmed116@gmail.com',
    subject:'testing email',
    text:'hi sir i am pavithra ?'
}

transporter.sendMail(maioption,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail sent')
    }
})