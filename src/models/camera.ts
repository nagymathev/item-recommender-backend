import { DataTypes, Sequelize } from "sequelize";

const getCameraModel = (sequelize: Sequelize) => {
    const Camera = sequelize.define('camera', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        camera_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        outfit_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        resolution: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
    })

    return Camera;
}

export default getCameraModel;