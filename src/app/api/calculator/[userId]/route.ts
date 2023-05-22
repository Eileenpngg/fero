import { addCalculatorEntry, getCalculatorEntry } from '@/app/lib/postCalculator';
import { NextRequest, NextResponse } from 'next/server';
// import seedUsers from "@/app/lib/seedUsers";

//POST api/calculator/[email]
export async function POST(req: NextRequest, res: NextResponse) {
    const {calculator} = req.body;
    const email = req.url.split('/').pop();
    const response = addCalculatorEntry(email, calculator);
    return NextResponse.json({
        "message": calculator,
        "email": email,
        "response": response,
    });
}

//GET api/calculator/[email]
export async function GET(req: NextRequest, res: NextResponse) {
    const email = req.url.split('/').pop();
    const response = getCalculatorEntry(email);

    return NextResponse.json({
        "email": email,
        "response": response,
    });
}