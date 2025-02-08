import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { userId, name, image, text, picture } = await readBody(event)
    const post = await prisma.posts.create({
        data: { userId, name, image, text, picture }
    })
    return post
})