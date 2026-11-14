import {NextResponse} from 'next/server';
import {transport} from '@/lib/nodemailer';

export async function POST(request: Request) {
    const body = await request.json();
    const {name, company, email, phone, problem, message} = body;
    if(
            !name || !company || !email || !phone || !problem || !message ||
            typeof name !== 'string' || typeof company !== 'string' || 
            typeof email !== 'string' || typeof phone !== 'string' || 
            typeof problem !== 'string' || typeof message !== 'string'
        ){
        return NextResponse.json({message: 'Invalid Input'}, {status: 400});
    }
    const transportor = transport();
    await transportor.sendMail({
        to: 'ibrahimahmad@umiconsultants.com',
        from: 'ibrahimahmad@umiconsultants.com',
        replyTo: email,
        subject: 'Main Contact Form Submission',
        html: `
        <p><strong>name:</strong> ${name}</p>
        <p><strong>email:</strong> ${email}</p>
        <p><strong>company:</strong> ${company}</p>
        <p><strong>phone:</strong> ${phone}</p>
        <p><strong>Query related to:</strong> ${problem}</p>
        <p><strong>Message:</strong> ${message}</p>
        `
    });
    return NextResponse.json({
        status: 200,
        message: 'successfully submitted'
    });
}