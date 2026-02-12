import { Resend } from "resend";
import { NextResponse } from "next/server";


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req) {
    const {name, phone , email, message } = await req.json()

    try{
        await resend.emails.send({
            from: "onboarding@resend.dev", // verified email,
            to: "taimurjan241@gmail.com",
            subject:`New Message from ${name}`,
            reply_to: email,  
            html:`
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p><strong>Phone:</strong> ${phone}</p>
            `
        })

        return NextResponse.json({success:true})
    }catch(error){
        return NextResponse.json({success:false})
    }
    
}