import { Request, Response } from "express"
import { updateUserSchema } from "../utils/validator/UserValidator"
import UserServices from "../services/UserServices";


export default new class UserControllers {
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            const response = await UserServices.delete(id)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    // async getAll(req: Request, res: Response) {
    //     try {
    //         const response = await UserServices.getAll()
    //         return res.status(200).json(response)
    //     } catch (error) {
    //         console.error("Error Getting All User: ", error)
    //         return res.status(500).json({ message: "Internal Server Error", error: error.message })

    //     }
    // }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10)
            const response = await UserServices.getOne(id)
            return res.status(200).json(response)
        } catch (error) {
            console.error("Error Getting User ", error)
            return res.status(500).json({ message: "Internal Server Error", error: error.message })
        }
    }

    async update(req: Request, res: Response) {

        try {
            const id = parseInt(req.params.id, 10)
            if (isNaN(id)) {
                return res.status(400).json({
                    message: "Invalid ID Provided",
                    error: "Invalid input for type number"
                })
            }
            const data = req.body
            const { error, value } = updateUserSchema.validate(data)
            if (error) return res.status(400).json(error)

            const response = await UserServices.update(id, value)
            return res.status(201).json(response)
        } catch (error) {
            console.error("Error updating User")
            return res.status(500).json({ message: "Internal Server Error", error: error.message })
        }

    }
}
