import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // TODO: Implement Stripe webhook handler
  return NextResponse.json({ message: 'Stripe webhook endpoint (not implemented)' });
} 