import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with your API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    // Send email
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // display name can be changed
      to: "yoftsh9843@gmail.com", // REPLACE with your actual email
      subject: "New Contact Message",
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ message: "Email sent!" })

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    )
  }
}