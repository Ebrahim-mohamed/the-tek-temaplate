import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Called by the Express backend right after the owner saves in the dashboard,
// so the public page updates immediately.
export async function POST(req: Request) {
  const body: unknown = await req.json().catch(() => null);
  const data = (typeof body === "object" && body !== null ? body : {}) as { secret?: unknown; path?: unknown };

  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || data.secret !== secret) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const path = typeof data.path === "string" && data.path.startsWith("/") ? data.path : "/";
  revalidatePath(path);

  return NextResponse.json({ revalidated: true, path });
}
