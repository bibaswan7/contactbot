'use server';

import { contactFormSchema } from "@/schema/contact";
import { z } from "zod";

export async function sendForm(formData: z.infer<typeof contactFormSchema>) {
    const { name, email, address, phone, message } = formData;

    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: `
            <b>New Message</b>
            <b>Name:</b> ${name}
            <b>Email:</b> ${email}
            <b>Address:</b> ${address}
            <b>Phone:</b> ${phone}
            <b>Message:</b> ${message},
            `,
            parse_mode: 'HTML'
        })
    })

    console.log(response);

}