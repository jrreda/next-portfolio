import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import * as z from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().max(100).optional(),
  message: z.string().min(10).max(1000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactFormSchema.parse(body)

    // Get email configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD
    const recipientEmail = process.env.CONTACT_EMAIL || 'jrreda.dev@gmail.com'

    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    // Helper function to escape HTML
    const escapeHtml = (text: string) => {
      const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }
      return text.replace(/[&<>"']/g, (m) => map[m])
    }

    // Email content
    const subject = validatedData.subject 
      ? `Contact Form: ${escapeHtml(validatedData.subject)}`
      : 'Contact Form Submission'

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Portfolio Contact Form Submission
        </h2>
        
        <div style="margin-top: 20px;">
          <p><strong>Name:</strong> ${escapeHtml(validatedData.name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(validatedData.email)}">${escapeHtml(validatedData.email)}</a></p>
          ${validatedData.subject ? `<p><strong>Subject:</strong> ${escapeHtml(validatedData.subject)}</p>` : ''}
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(validatedData.message)}</p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This email was sent from the portfolio contact form.</p>
          <p>Reply directly to this email to respond to ${escapeHtml(validatedData.name)}.</p>
        </div>
      </div>
    `

    const textContent = `
New Portfolio Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.subject ? `Subject: ${validatedData.subject}` : ''}

Message:
${validatedData.message}

---
This email was sent from the portfolio contact form.
Reply directly to this email to respond to ${validatedData.name}.
    `

    // Send email
    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: validatedData.email,
      subject: subject,
      text: textContent,
      html: htmlContent,
    }
    
    await transporter.sendMail(mailOptions)
    
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
