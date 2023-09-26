const usersValidos = require('../utils/users');

const login = (req, res) => {
    const { user, pass } = req.query;
    let userAccess = { access: true };
    if (user !== usersValidos[0].email || pass !== usersValidos[0].password) {
        userAccess.access = false;
    }
    return res.status(200).json(userAccess);
};
module.exports = login;