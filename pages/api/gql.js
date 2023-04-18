import { databaseRequest } from "../../src/utils/databaseConnection"

const nextApiHandler = async (req, res) => {
    const keys = Object.keys(process.env).filter(k => k.startsWith('ADMIN_TOKEN_'))
    const tokens = keys.map(el => process.env[el])
    const foundToken = tokens.find(token => req.headers.authorization === `Bearer ${token}`)

    const isAuthorized =
        process.env.TINA_PUBLIC_IS_LOCAL === "true" ||
        foundToken ||
        false

    // TODO : Remove test auth
    if (isAuthorized || req.headers.authorization === `Bearer test`) {
        const { query, variables } = req.body
        const result = await databaseRequest({ query, variables })
        return res.json(result)
    } else {
        return res.status(401).json({ error: "Unauthorized" })
    }
}

export default nextApiHandler
