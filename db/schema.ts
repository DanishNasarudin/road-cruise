import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: integer("id").primaryKey(),
  role_id: integer("role_id").references(() => role.id),
  user_name: varchar("user_name", { length: 200 }),
  user_email: varchar("user_email", { length: 200 }),
});

export const role = pgTable("role", {
  id: serial("id").primaryKey(),
  role_name: varchar("role_name", { length: 200 }),
});
