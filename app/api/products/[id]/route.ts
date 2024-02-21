import { NextResponse } from 'next/server';
import { products } from '../data';

export async function GET(req: Request, context: { params: { id: string }; }) {
    const id = context.params.id;
    const data = products.filter(product => product.id === +id)[0];
    return NextResponse.json(data);
}