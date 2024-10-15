CREATE TABLE IF NOT EXISTS "tasks" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"is_completed" boolean,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
