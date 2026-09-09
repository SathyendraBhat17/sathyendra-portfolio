const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(payload),
  };
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid request body." });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !message) {
    return jsonResponse(400, { error: "Name, email, and message are required." });
  }

  if (!emailPattern.test(email)) {
    return jsonResponse(400, { error: "Please provide a valid email address." });
  }

  if (name.length > 120 || email.length > 254 || message.length > 5000) {
    return jsonResponse(400, { error: "One or more fields are too long." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL || "Portfolio contact <onboarding@resend.dev>";

  if (!apiKey || !recipient) {
    return jsonResponse(500, { error: "Contact service is not configured." });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      return jsonResponse(502, { error: "The message service could not accept the message." });
    }

    return jsonResponse(200, { ok: true });
  } catch {
    return jsonResponse(502, { error: "The message could not be sent. Please try again." });
  }
}
