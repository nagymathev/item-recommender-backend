import { Router } from "express";
import { Op, Sequelize } from "sequelize";

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

router.get('/getCameraTypes', async (req, res) => {
    return res.send(await req.ctx?.models.Camera.findAll({
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('camera_type')), 'camera_type']
        ]
    }))
})

router.get('/getOutfitTypes', async (req, res) => {
    return res.send(await req.ctx?.models.Camera.findAll({
        where: {
            camera_type: req.query.camera_type,
        },
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('outfit_type')), 'outfit_type']
        ]
    }))
})

router.get('/getResolutions', async (req, res) => {
    return res.send(await req.ctx?.models.Camera.findAll({
        where: {
            camera_type: req.query.camera_type,
            outfit_type: req.query.outfit_type,
        },
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('resolution')), 'resolution']
        ]
    }))
})

export default router;