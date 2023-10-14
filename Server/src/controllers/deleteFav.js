const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    try {
        if (!id) return res.status(401).send("Falta id");
        const findFav = await Favorite.findOne({
            where: { CharId: id, userId: userId },
        });
        if (!findFav) { return res.status(404).send("No encontrado"); };
        findFav.destroy();
        // devuelvo todos los favoritos del usuario:
        const newFav = await Favorite.findAll({
            where: { userId: userId },
        });
        return res.status(200).json(newFav);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
module.exports = deleteFav;
