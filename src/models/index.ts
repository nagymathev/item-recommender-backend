import { Sequelize } from "sequelize";

import getCameraModel from "./camera";
import getCameraMountModel from "./camera_mount";

const sequelize = new Sequelize(`postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}:${process.env.DATABASE_PORT}/${process.env.DATABASE}`)

const models = {
    Camera: getCameraModel(sequelize),
    CameraMount: getCameraMountModel(sequelize),
}

// models.CameraType.hasMany(models.Camera, {foreignKey: "id"});
// models.Camera.belongsTo(models.CameraType);

// models.OutfitType.hasMany(models.Camera, {foreignKey: "id"});
// models.Camera.belongsTo(models.OutfitType);

export { sequelize, models };