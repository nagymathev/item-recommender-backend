import { Router } from "express";
import { Op } from "sequelize";

const router = Router();

router.get('/', async (req, res) => {

    const cameraFiltered = await req.ctx?.models.Camera.findAll({
        where: {
            ...(req.query.resolution && {resolution: req.query.resolution}),
            ...(req.query.camera_type && {camera_type_id: req.query.camera_type}),
            ...(req.query.outfit_type && {outfit_type_id: req.query.outfit_type}),
        },
    })

    return res.send(cameraFiltered);
})

export default router;