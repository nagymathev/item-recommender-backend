import 'dotenv/config'
import express from "express";
import cors from 'cors';

import { sequelize, models } from "./models";
import routes from "./routes"

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    req.ctx = {
        models,
    };

    next();
})

const eraseDBOnSync = true;

sequelize.sync({ force: eraseDBOnSync, alter: true }).then(() => {
    if (eraseDBOnSync) {
        // createUser();
        createCameraType();
        createOutfitType();
        setTimeout(() => {
            createCamera();
        }, 1000);
    }

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })
})

// const createUser = async () => {
//     await models.User.create(
//         {
//             username: 'viktor',
//         }
//     );

//     await models.User.create(
//         {
//             username: 'The Other Dude',
//         }
//     )
// }

const createCamera = async () => {
    await models.Camera.bulkCreate([
        {
            name: "Amazing Camera",
            camera_type_id: 1,
            outfit_type_id: 2,
            resolution: 16,
        },
        {
            name: "Fabulous Optical Camera",
            camera_type_id: 2,
            outfit_type_id: 3,
            resolution: 16,
        },
        {
            name: "Omegagood Camera",
            camera_type_id: 3,
            outfit_type_id: 2,
            resolution: 128,
        }
    ])
}

const createCameraType = async () => {
    await models.CameraType.create(
        {
            name: "Hyper Camera",
        }
    );

    await models.CameraType.create(
        {
            name: "Underwater Camera",
        }
    );

    await models.CameraType.create(
        {
            name: "IP Camera",
        }
    );
}

const createOutfitType = async () => {
    await models.OutfitType.bulkCreate([
        {
            name: "McDonalds Camera",
        },
        {
            name: "Train Camera",
        },
        {
            name: "House Security Camera",
        },
    ])
}

app.use('/camera', routes.camera);
app.use('/camera_type', routes.camera_type);
app.use('/outfit_type', routes.outfit_type);