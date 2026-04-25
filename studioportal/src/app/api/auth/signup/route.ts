import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = (global as any).prisma || new PrismaClient();
if (!(global as any).prisma) (global as any).prisma = prisma;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return new Response('Missing email or password', { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return new Response('Email already in use', { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name || null,
        email,
        hashedPassword: hashed,
      },
    });

    // create session
    const sessionToken = crypto.randomBytes(48).toString('hex');
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await prisma.session.create({
      data: {
        sessionToken,
        userId: user.id,
        expires,
      },
    });

    const cookie = serialize('studio_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', 'Set-Cookie': cookie },
    });
  } catch (err) {
    console.error(err);
    return new Response('Server error', { status: 500 });
  }
}
