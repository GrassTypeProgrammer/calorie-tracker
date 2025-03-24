import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createFoodItemSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createFoodItemSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const foodItem = await prisma.foodItem.create({
        data: {
            name: body.name,
            protein: body.protein,
            fat: body.fat,
            carbs: body.carbs,
            calories: body.calories,
        }
    });

    return NextResponse.json(foodItem, {status: 201});
}