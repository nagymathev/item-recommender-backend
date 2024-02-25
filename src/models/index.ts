import { Sequelize } from "sequelize";

import { getUserModel } from "./user";
import getCameraModel from "./camera";
import getCameraTypeModel from "./cameraType";
import getOutfitTypes from "./outfit_type";

const sequelize = new Sequelize(
    process.env.DATABASE!,
    process.env.DATABASE_USER!,
    process.env.DATABASE_PASSWORD!,
    {
        dialect: 'postgres',
    },
)

const models = {
    Camera: getCameraModel(sequelize),
    CameraType: getCameraTypeModel(sequelize),
    OutfitType: getOutfitTypes(sequelize),
}

models.CameraType.hasMany(models.Camera, {foreignKey: "id"});
models.Camera.belongsTo(models.CameraType);

models.OutfitType.hasMany(models.Camera, {foreignKey: "id"});
models.Camera.belongsTo(models.OutfitType);

export { sequelize, models };