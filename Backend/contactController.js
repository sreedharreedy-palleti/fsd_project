import Message from './Message.js';
import { sendNotificationEmails } from './mailer.js';

export const handleContactSubmit = async (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'Please provide all required fields: name, email, and message.'
        });
    }

    try {
        // 1. Save entry to MongoDB
        const newMessage = await Message.create({
            name,
            email,
            message
        });

        // 2. Fire email dispatches in the background
        sendNotificationEmails({ name, email, message }).catch((err) => {
            console.error('Nodemailer background failure:', err.message);
        });

        return res.status(201).json({
            success: true,
            message: 'Your message has been received successfully.',
            data: newMessage
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map((val) => val.message);
            return res.status(400).json({
                success: false,
                error: messages.join(', ')
            });
        }

        return res.status(500).json({
            success: false,
            error: 'Internal server error while processing your request.'
        });
    }
};