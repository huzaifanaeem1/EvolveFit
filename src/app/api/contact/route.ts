// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const formBody = new URLSearchParams();

    formData.forEach((value, key) => {
      formBody.append(key, value.toString());
    });

    const response = await fetch(
      "https://docs.google.com/forms/u/0/d/1TYE9AeemdQGRZTdk3hDnmkoEXzQ67ywjvmItkkSbvFY/previewResponse", // Google Form link
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      }
    );

    if (!response.ok && response.status !== 0) {
      throw new Error("Failed to send message to Google Form");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in sending message:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
