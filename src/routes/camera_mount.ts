import { Router } from "express";
import { Op, Sequelize } from "sequelize";

const router = Router();

router.get('/', async (req, res) => {
    const response = await req.ctx?.models.CameraMount.findAll({
        where: {
            // ...(req.query.numofcams && {num_of_spots: {[Op.gt]: req.query.numofcams}}),
            num_of_spots: {[Op.gte]: req.query.numofcams}
        },
        order: [
            ['num_of_spots', 'ASC'],
        ]
    })

    return res.send(response);
})

export default router;