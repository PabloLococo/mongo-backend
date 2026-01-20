import { Request, Response } from "express"
import { User } from "../models/AuthModel"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const register = async (req: Request , res: Response) => {
    try {
        const {body} = req
        const { username, email ,password} = body

        if ( !email || !password ){
            return res.json({error: "data invalida"})
        }
        const foundUser = await User.findOne ({email})
        if (foundUser)
        {
              return res.status(409).json({ error: "El usuario ya existe en nuestra base de datos" })
        }
        const hashPassword = await bcrypt.hash ( password, 10)
        const createUser = await User.create({username, email, password:hashPassword})
        const publicDataUser = {username:createUser.username, email: createUser.email}
        res.status(201).json(publicDataUser)
    } catch (error) {
        res.status(500).json ({error:"Error interno del servidor"})
    }
}

const login = async (req: Request , res: Response) => {
try {
    const{ email, password} = req.body
    if ( !email || !password){
        return res.status(400).json({success:false, error: "data invalida"})
    }
    const foundUser = await User.findOne({email})
    if(!foundUser){
        return res.status(400).json({success:false, error: "desautorizado"})
    }
    const validatePass = await bcrypt.compare(password, foundUser.password)
    if (!validatePass) {
      return res.status(401).json({ success: false, error: "contraseña incorrecta" })
    }
    const payload = {
        _id: foundUser._id,
        username: foundUser.username,
        email: foundUser.email
    }
    const token = jwt.sign(payload,"passSuperDuperSegura", {expiresIn : "1h"})
    res.json({token})

}   catch (error) {
        console.log(error)
    res.status(500).json({ error: "Error interno del servidor" })
    }
}

export {login,register}