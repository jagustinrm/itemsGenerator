import { NextResponse } from "next/server";
import CreateCustomArmor from "../../../../lib/createCustomArmor";
export async function GET(request: Request) {
    try {
        return NextResponse.json({status: 200})
    } catch (error) {
        console.error('Request failed', error)
        return NextResponse.json({status: 500})
    }
}

export async function POST (request: Request) {
    const { createArmor } = CreateCustomArmor();
    try {
       
        const armor = await createArmor(); 
        console.log(armor)
        return NextResponse.json({ status: 200, message: armor });
    } catch (error) {
        console.error("POST request failed:", (error as Error).message);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
}