import { DataTypes, Sequelize } from "sequelize";

const getCameraTypeModel = (sequelize: Sequelize) => {
    const CameraType = sequelize.define('camera_type', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
    })

    return CameraType;
}

export default getCameraTypeModel;