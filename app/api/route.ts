import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

const GET = async () => {
  return NextResponse.json<ResponseData>({ message: "Hello World" });
};

export { GET };
