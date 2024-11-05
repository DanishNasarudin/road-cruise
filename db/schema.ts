import { sql } from "drizzle-orm";
import {
  pgTable,
  serial,
  varchar,
  timestamp,
  numeric,
  integer,
  index,
  jsonb,
  primaryKey,
  text,
} from "drizzle-orm/pg-core";

export const user = pgTable(
  "user",
  {
    id: serial().primaryKey(),
    roleId: integer()
      .notNull()
      .references(() => userRole.id),
    name: varchar().notNull(),
    username: varchar(),
    email: varchar({ length: 50 }),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp()
      .notNull()
      .$onUpdateFn(() => sql`NOW()`),
  },
  (table) => [
    {
      usernameIdx: index().on(table.username),
      emailIdx: index().on(table.email),
    },
  ]
);

export const userRole = pgTable("userRole", {
  id: serial().primaryKey(),
  name: varchar().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .$onUpdateFn(() => sql`NOW()`),
});

export const route = pgTable(
  "route",
  {
    id: serial().primaryKey(),
    userId: integer()
      .notNull()
      .references(() => user.id),
    name: varchar({ length: 100 }).notNull(),
    locationName: varchar().notNull(),
    locationCoordinate: jsonb().notNull(),
    roadLength: numeric({ precision: 10, scale: 2 }),
    roadTime: integer(),
    type: varchar({ length: 20 }).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp()
      .notNull()
      .$onUpdateFn(() => sql`NOW()`),
  },
  (table) => [
    {
      userIdIdx: index().on(table.userId),
      lengthIdx: index().on(table.roadLength),
      typeIdx: index().on(table.roadTime),
      timeIdx: index().on(table.type),
    },
  ]
);

export const userFavRoute = pgTable(
  "userFavRoute",
  {
    userId: integer()
      .notNull()
      .references(() => user.id),
    routeId: integer()
      .notNull()
      .references(() => route.id),
  },
  (table) => [
    {
      pk: primaryKey({
        columns: [table.userId, table.routeId],
      }),
    },
  ]
);

export const review = pgTable(
  "review",
  {
    id: serial().primaryKey(),
    routeId: integer()
      .notNull()
      .references(() => route.id),
    userId: integer()
      .notNull()
      .references(() => user.id),
    comment: text(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp()
      .notNull()
      .$onUpdateFn(() => sql`NOW()`),
  },
  (table) => [
    {
      routeIdIdx: index().on(table.routeId),
    },
    {
      userIdIdx: index().on(table.userId),
    },
  ]
);
