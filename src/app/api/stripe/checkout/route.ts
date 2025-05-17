import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // TODO: Implement Stripe checkout
  return NextResponse.json({ message: 'Stripe checkout endpoint (not implemented)' });
} 