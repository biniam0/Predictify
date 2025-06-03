import { Request, Response } from "express";

const fetchCurrentUser = async (req: Request, res: Response) => {
    try {
        const user = await getCurrentUser()
        res.status(200).json({user})
    } catch (err) {
        console.log(err)
        res.status(404).json("Failed to fetch the current user")
    }
}

export default fetchCurrentUser