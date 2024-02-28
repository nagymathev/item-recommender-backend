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
        camera_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        outfit_type: {
            type: DataTypes.STRING,
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
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: true,
            },
            defaultValue: 0,
        }
    })

    return Camera;
}

export default getCameraModel;