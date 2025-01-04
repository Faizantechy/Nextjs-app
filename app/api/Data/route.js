import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    { name: "Faizan", age: 21, class: "BA", id: 1 },
    { name: "Taha", age: 21, class: "12th", id: 2 },
    { name: "Arslan", age: 21, class: "BA", id: 3 },
    { name: "Nabeel", age: 21, class: "Medical", id: 4 },
    { name: "Shani", age: 21, class: "FSC", id: 5 },
  ];

  return NextResponse.json({ users: users, status: 200 });
}
