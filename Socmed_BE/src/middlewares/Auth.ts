// Import tipe-tipe Express untuk Request, Response, dan NextFunction
import { NextFunction, Request, Response } from "express";

// Import library JSON Web Token
import * as jwt from "jsonwebtoken";

// Mendefinisikan dan mengekspor sebuah kelas bernama AuthMiddleware
export default new class AuthMiddleware {
    
    // Mendefinisikan metode Auth dengan Request, Response, dan NextFunction sebagai parameter
    Auth(req: Request, res: Response, next: NextFunction): Response {
        
        // Mengambil header "Authorization" dari permintaan yang masuk
        const authHeader = req.headers.authorization;

        // Memeriksa apakah header "Authorization" ada dan apakah token dimulai dengan "Bearer"
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            // Jika tidak, kembalikan respons 401 Unauthorized dengan pesan JSON
            return res.status(401).json({ message: "unauthorize" });
        }

        // Mengambil token dari header "Authorization"
        const token = authHeader.split(" ")[1];

        try {
            // Memverifikasi token menggunakan kunci rahasia ("MATIINMIC")
            const loginSession = jwt.verify(token, "MATIINMIC");

            // Jika token valid, lampirkan loginSession ke `res.locals` dan panggil middleware berikutnya
            res.locals.loginSession = loginSession;
            next();
        } catch (error) {
            // Jika terjadi kesalahan selama verifikasi token, kembalikan respons 401 Unauthorized dengan pesan kesalahan
            return res.status(401).json({ message: "token not valid" });
        }
    }
}
