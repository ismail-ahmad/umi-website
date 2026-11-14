import { NextResponse } from "next/server";
import {transport} from '@/lib/nodemailer';

export async function POST(request: Request){
    const body = await request.json();
    const {email} = body;
    console.log(email);
    if(!email || typeof email !== 'string'){
        return NextResponse.json({
            message: 'input error',
            status: 400
        });
    }
    const transporter = transport();
    await transporter.sendMail({
        from: '"Free Checklist - Email <ibrahimahmad@umiconsultants.com>"',
        to: 'ibrahimahmad@umiconsultants.com',
        subject: 'Free Checklist - Email',
        text: email,
        replyTo: email
    });
    await transporter.sendMail({
        from:'ibrahimahmad@umiconsultants.com',
        to: email,
        subject: 'UMI Consultants',
        text: 'Thank you for the registration, Our team will reach out to you as soon as possible. We appreciate your patience.'
    });
    return NextResponse.json({
        message: 'email send',
        status: 200
    });
}