import EmailTemplate from '@/app/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'email@michalciberej.com',
      to: ['michal.ciberej@gmail.com'],
      subject: 'Email from a user of Personal website',
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
