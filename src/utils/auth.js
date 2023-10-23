import { compare, hash } from "bcryptjs"
import { verify } from "jsonwebtoken"

const hashPassword = async (password) => {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
}


const verifyPassword = async (password, hashedPassword) => {
    const isVerify = await compare(password, hashedPassword)
    return isVerify
}

const verifyToken = (token, secretkey) => {
    try {
        const result = verify(token, secretkey)
        return result
    } catch (error) {
        return false
    }

}


export { hashPassword, verifyPassword, verifyToken }