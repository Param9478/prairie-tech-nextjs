'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
    const { name, email, type, budget, message } = formData;

    try {
        // 1. Tuhanu Notification Email Aave
        await resend.emails.send({
            from: 'Prairie Tech <info@prairietechs.com>', // Domain verify hon to baad apna email pao
            to: 'singh.parminder2896@gmail.com',
            subject: `New Project Inquiry: ${type}`,
            html: `
        <h2>New Lead from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
        });

        // 2. Client nu Automatic Reply Jaye (Professional Touch)
        await resend.emails.send({
            // NOTE: Jad tak domain verify nahi hunda, 'onboarding@resend.dev' hi rehne deo
            from: 'Prairie Tech Services <info@prairietechs.com>',
            to: email,
            subject: 'We received your inquiry - Prairie Tech Services',
            html: `
    <div style="display: none; max-height: 0px; overflow: hidden;">
      We've received your inquiry for ${type}. Here are the next steps...
    </div>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #333; max-width: 550px; margin: 20px auto; border: 1px solid #f0f0f0; padding: 25px; border-radius: 8px; background-color: #ffffff;">
        <h2 style="font-size: 18px; color: #111; margin: 0 0 15px 0; font-weight: 500;">
            Hi <span style="color: #2563eb; font-weight: 700;">${name}</span>,
        </h2>
        
        <p style="margin: 0 0 12px 0; font-size: 15px;">Thank you for reaching out to <strong>Prairie Tech Services</strong>!</p>
        
        <p style="margin: 0 0 12px 0; font-size: 15px;">We've received your request regarding a <strong>${type}</strong> project. Our team is currently reviewing the details to ensure the best solution for your business.</p>
        
        <p style="margin: 0 0 20px 0; font-size: 15px;">Expect a detailed response or a follow-up call from us within <strong>24 hours</strong> to discuss the next steps.</p>
        
        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #f5f5f5;">
            <p style="margin: 0; font-size: 14px; font-weight: bold; color: #111;">Best Regards,</p>
            <p style="margin: 2px 0 0 0; color: #2563eb; font-weight: 700; font-size: 15px;">Prairie Tech Services</p>
            <p style="margin: 0; font-size: 12px; color: #888;">Modern Web Solutions | High Prairie, AB</p>
        </div>
    </div>
`
        });

        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}