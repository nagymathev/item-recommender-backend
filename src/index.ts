import 'dotenv/config'
import express from "express";
import cors from 'cors';

import { sequelize, models } from "./models";
import routes from "./routes"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
    req.ctx = {
        models,
    };

    next();
})

app.use('/camera', routes.camera);

const eraseDBOnSync = false;

sequelize.sync({ force: eraseDBOnSync, alter: true }).then(() => {
    if (eraseDBOnSync) {
        setTimeout(() => {
            createCamera();
        }, 1000);
    }

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })
})

const createCamera = async () => {
    await models.Camera.bulkCreate([
        {
            name: "Amazing Camera",
            camera_type: "Yes Camera",
            outfit_type: "Maccas",
            resolution: 16,
        },
        {
            name: "Fabulous Optical Camera",
            camera_type: "No Camera",
            outfit_type: "Maccas",
            resolution: 16,
        },
        {
            name: "Omegagood Camera",
            camera_type: "Yes Camera",
            outfit_type: "Train Hopper",
            resolution: 128,
        },
    ])
}