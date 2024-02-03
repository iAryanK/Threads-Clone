import * as z from "zod"

export const userValidation = z.object({
    profile_photo: z.string().url().min(1),
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(30),
    bio: z.string().min(3).max(3000),
  })

export const ThreadValidation = z.object({
    thread: z.string().min(3),
    accountId: z.string(),
  })

export const CommentValidation = z.object({
    thread: z.string().min(3),
  })