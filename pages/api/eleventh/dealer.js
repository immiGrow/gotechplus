export default async function dealer(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body
        if (email === "gotechplus728@gotechplus.com" && password === "728@Gotechplus") {
            res.status(200).json({
                success: true,
                message: "You are authorized to this site."
            })
        } else {
            res.status(401).json({
                error: "You are not Authorized to this site."
            })
        }
    }
}