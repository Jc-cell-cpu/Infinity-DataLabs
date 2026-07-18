export function GET() {
  return Response.json({ status: "healthy", service: "infinity-datalabs-web" }, { status: 200 });
}
