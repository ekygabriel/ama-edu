export async function GET() {
  return new Response("Hello world");
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  return Response.json({ data });
}
