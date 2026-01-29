import type { Handler } from '@netlify/functions'
import nodemailer from 'nodemailer'

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const { name, email, phone, address, message } = JSON.parse(event.body || '{}')

    // Validate required fields
    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      }
    }

    // Get SMTP credentials from environment variables
    const smtpEmail = process.env.SMTP_EMAIL || 'solergysystems7@gmail.com'
    const smtpPassword = process.env.SMTP_PASSWORD || ''

    // Check if SMTP is configured
    if (!smtpPassword) {
      console.error('SMTP_PASSWORD not configured in environment variables')
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Email service not configured' })
      }
    }

    console.log('SMTP Email:', smtpEmail)
    console.log('Attempting to send email...')

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use TLS
      auth: {
        user: smtpEmail,
        pass: smtpPassword
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify transporter configuration
    await transporter.verify()
    console.log('SMTP connection verified')

    // Email content
    const mailOptions = {
      from: `"Solergy Systems Contact Form" <${smtpEmail}>`,
      to: smtpEmail, // Send to yourself
      replyTo: email,
      subject: `New Solar Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 3px solid #f97316; padding-bottom: 10px;">
            New Enquiry from Solergy Systems Website
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${address ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Address:</strong> ${address}</p>` : ''}
          </div>
          
          ${message ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Message:</h3>
              <p style="background: #fff; padding: 15px; border-left: 4px solid #f97316; border-radius: 4px;">
                ${message.replace(/\n/g, '<br>')}
              </p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Solergy Systems contact form.</p>
            <p>Please respond to the customer at: <a href="mailto:${email}">${email}</a></p>
          </div>
        </div>
      `
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      })
    }

  } catch (error) {
    console.error('Error sending email:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    }
  }
}
