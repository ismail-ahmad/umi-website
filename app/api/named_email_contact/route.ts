import {transport} from '@/lib/nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const {name, email} = body;

    if(name === "" || email === "" || typeof name !== 'string' || typeof email !== 'string'){
        NextResponse.json({
            message: 'Email or Name is missing',
            status: 400
        });
    }
    const transportor = transport();
    try{
        await transportor.sendMail({
        to: 'ibrahimahmad@umiconsultants.com',
        from: 'ibrahimahmad@umiconsultants.com',
        subject: 'Free Checklist - Name and Email',
        text: `${name}: ${email}`
    });
    return NextResponse.json({
        message: 'Email send successfully',
        status: 200
    });
    } catch(err) {
        return NextResponse.json({
        message: `Email could not send successfully ${err}`,
        status: 400
    });
    }
    

}