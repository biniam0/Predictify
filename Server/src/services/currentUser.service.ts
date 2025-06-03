import prisma from "../models/prisma"

const getCurrentUser = (userId: number) => {
    return await prisma.user.findUnique({userId})

}

export default getCurrentUser