export function validCreated(req, res, next) {
    try {
        const { username, password, email, user_type } = req.body
        if (!username || !password || !email || !user_type) return res.status(400).json({ error: "One or more details are missing." })
        if (typeof username !== "string" || typeof password !== "string" || typeof email !== "string" || typeof user_type !== "string") {
            return res.status(400).json({ error: "One or more of the individuals are not twins." })
        }
        if (username.trim() === "" || password.trim() === "" || email.trim() === "" || user_type.trim() === "") {
            return res.status(400).json({ error: "One or more of the details are incorrect or empty." })
        }
        const letters = /^[a-zA-Zא-ת\s]+$/
        const charactersEmail = /^([a-zA-Z0-9.])+\@([a-zA-Z0-9]+\.)+([a-zA-Z])+$/
        if (!letters.test(username) || !letters.test(user_type) || !charactersEmail.test(email)) {
            return res.status(400).json({ error: "The username and user_type fields can only be letters or email is invalid." })
        }
        next()
    } catch (error) {
        res.status(500).json({ error: error.messsage })
    }
}