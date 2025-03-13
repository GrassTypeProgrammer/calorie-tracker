import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const createFoodItemSchema = z.object({
    name: z.string().min(1).max(191),
    protein: z.number().min(0),
    fat: z.number().min(0),
    carbs: z.number().min(0),
    calories: z.number().min(0),
})

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