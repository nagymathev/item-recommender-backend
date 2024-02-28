import { Router } from "express";
import { Op, Sequelize } from "sequelize";

const router = Router();

router.get('/', (req, res) => {
    const response = req.ctx?.models.CameraMount.findAll({
        where: {
            ...(req.query.resolution && {num_of_spots: {[Op.gt]: req.query.numofcams}}),
        },
        order: [
            ['num_of_spots', 'ASC'],
        ]
    })

    return res.send()
})