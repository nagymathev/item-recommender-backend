import { Router } from "express";
import { sequelize } from "../models";

const router = Router();

router.get('/', async (req, res) => {
    const [results, metadata] = await sequelize.query(`select * from cameras, camera_types, outfit_types
    where cameras.camera_type_id = camera_types.id
    and cameras.outfit_type_id = outfit_types.id
    and camera_types.id = 2`)

    return res.send(results)
})

router.get('/:id', async (req, res) => {
    return res.send(await req.ctx?.models.OutfitType.findAll({
        where: {
            id: req.params.id,
        },
    }))
})

export default router;