import { Sequelize } from "sequelize";

import getCameraModel from "./camera";

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
}

// models.CameraType.hasMany(models.Camera, {foreignKey: "id"});
// models.Camera.belongsTo(models.CameraType);

// models.OutfitType.hasMany(models.Camera, {foreignKey: "id"});
// models.Camera.belongsTo(models.OutfitType);

export { sequelize, models };