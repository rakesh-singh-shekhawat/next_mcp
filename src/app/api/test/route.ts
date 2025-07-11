// app/api/mcp-context/route.ts
import { NextResponse } from "next/server";
import { query } from "../db";

// export async function GET() {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     return NextResponse.json({ time: result.rows[0] });
//   } catch (error) {
//     return NextResponse.json({ error: "DB not connected", log: error });
//   }
// }
export async function GET() {
  console.log("⚡ API route hit at build time (unexpected)");

  const users = await query(
    "SELECT user_id, name, title, time_zone FROM gemduty_own.users ORDER BY user_id ASC"
  );

  return NextResponse.json({
    models: [
      {
        name: "User",
        description: "Application users",
        fields: [
          { name: "user_id", type: "string" },
          { name: "name", type: "string" },
          { name: "title", type: "string" },
          { name: "time_zone", type: "string" },
        ],
        records: users,
      },
    ],
  });
}
