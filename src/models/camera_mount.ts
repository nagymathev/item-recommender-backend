import { DataTypes, Sequelize } from "sequelize";

const getCameraMountModel = (sequelize: Sequelize) => {
    const CameraMount = sequelize.define('camera_mount', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        num_of_spots: {
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
    }, {
        timestamps: false,
    })

    return CameraMount;
}

export default getCameraMountModel;