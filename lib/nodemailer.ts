import nodemailer from "nodemailer";

export function transport(){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD
        }
    });
    return transporter;
}