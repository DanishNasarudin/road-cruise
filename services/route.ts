"use server";

import db from "@/db/db";

export async function getRoutes() {
  return await db.query.route.findMany({});
}
