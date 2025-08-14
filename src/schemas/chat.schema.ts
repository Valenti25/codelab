
import { z } from "zod"

export const formChatSchema = z.object({
    email: z.string().email(),
    phone: z.string().min(10),
    name: z.string().min(2),
})