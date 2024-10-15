import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core'

export const tasks = pgTable('tasks', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    title: text('title').notNull(),
    description: text('description').notNull(),
    isCompleted: boolean('is_completed').$defaultFn(() => false),
    createdAt: timestamp('created_at', {withTimezone: true}).notNull().defaultNow()
})