import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "capitalccleanersss@gmail.com";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, service, message } =
      await request.json();

    if (!firstName || !lastName || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Capital Cleaners Enquiry <onboarding@resend.dev>",
      to: RECIPIENT,
      replyTo: email,
      subject: `New Enquiry – ${service} from ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1d1d1f">
          <h2 style="color:#0071e3">New enquiry from your website</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6e6e73;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0;color:#6e6e73">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#0071e3">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6e6e73">Phone</td><td style="padding:8px 0">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;color:#6e6e73">Service</td><td style="padding:8px 0;font-weight:600">${service}</td></tr>
          </table>
          ${
            message
              ? `<div style="margin-top:20px;padding:16px;background:#f5f5f7;border-radius:12px">
              <p style="margin:0 0 8px;color:#6e6e73;font-size:13px">MESSAGE</p>
              <p style="margin:0;white-space:pre-wrap">${message}</p>
            </div>`
              : ""
          }
          <p style="margin-top:24px;font-size:13px;color:#a1a1a6">Sent via capitalcleaners.co.uk contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
