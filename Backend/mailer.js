import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const sendNotificationEmails = async ({ name, email, message }) => {
    // 1. Notification email sent to your inbox
    const adminMailOptions = {
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f1f5f9; padding: 15px; border-left: 4px solid #0284c7;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
      </div>
    `
    };

    // 2. Auto-reply receipt sent to the sender
    const userAutoReplyOptions = {
        from: `"Valmiki Yaswanth Ram" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thank you for reaching out, ${name}!`,
        html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
        <h2>Hi ${name},</h2>
        <p>Thanks for getting in touch. I've received your message and will review it shortly.</p>
        <p>Here is a summary of what you submitted:</p>
        <blockquote style="background: #f8fafc; padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px;">
          "${message.replace(/\n/g, '<br>')}"
        </blockquote>
        <br/>
        <p>Best regards,<br/><strong>Valmiki Yaswanth Ram</strong></p>
      </div>
    `
    };

    await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userAutoReplyOptions)
    ]);
};