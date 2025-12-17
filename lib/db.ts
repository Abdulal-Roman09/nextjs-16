// lib/db.ts

import { PrismaClient } from '@prisma/client'

declare global {

  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],  // optional, প্রয়োজন অনুযায়ী রাখো/রিমুভ করো
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma