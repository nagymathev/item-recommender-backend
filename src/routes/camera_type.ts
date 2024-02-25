import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
    return res.send(await req.ctx?.models.CameraType.findAll());
})

router.get('/:id', async (req, res) => {
    return res.send(await req.ctx?.models.CameraType.findAll({
        where: {
            id: req.params.id,
        }
    }))
})

export default router;