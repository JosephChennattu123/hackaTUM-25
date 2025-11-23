import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      )
    }

    // Create FormData for the external API
    const formDataToSend = new FormData()
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    // Create a Blob from the buffer for FormData
    const blob = new Blob([buffer], { type: file.type || "image/png" })
    formDataToSend.append("file", blob, file.name || "image.png")

    const response = await fetch("https://unsagging-limberly-crissy.ngrok-free.dev/detect", {
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
      body: formDataToSend,
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `API error: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Proxy error:", error)
    return NextResponse.json(
      { error: "Failed to proxy request" },
      { status: 500 }
    )
  }
}

