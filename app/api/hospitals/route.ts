import { getLists } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const lists = getLists();
    return NextResponse.json({ message: "OK", lists}, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }.err, { status: 500 });
  }
};



// export const POST = async(req : Request, res: Response) => {
//   const {id, name, address, location, shortDesc, description, rating} = await req.json()
//   try {
//     const lists = {id, name, address, location, shortDesc, description, rating}
//   } catch (err) {
//     NextResponse.json({message: 'Error', err}, {status: 500})
//   }
// }