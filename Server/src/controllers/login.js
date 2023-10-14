const { User } = require('../DB_connection');

const login = async (req, res) => {
    const { email, password } = req.query;
    try {
        if (!email || !password) return res.status(400).send("Faltan datos");
        const findUser = await User.findOne({
            where: { email: email },
        });
        if (!findUser) { return res.status(404).send("No encontrado"); };
        if (password !== findUser.password) { return res.status(403).send("Contraseña incorrecta"); };
        return res.status(200).json({ access: true, id: findUser.id });
    } catch (err) {
        return res.status(500).send(err.message);
    }
};
module.exports = login;
