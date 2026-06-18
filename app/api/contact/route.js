export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const response = await fetch('https://formsubmit.co/ajax/ruchitsheth127@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _subject: `Portfolio message from ${name.trim()}`,
        _template: 'table',
      }),
    })

    if (!response.ok) {
      return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
