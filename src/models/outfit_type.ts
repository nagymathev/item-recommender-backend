import { DataTypes, Sequelize } from "sequelize";

const getOutfitTypes = (sequelize: Sequelize) => {
    const OutfitType = sequelize.define('outfit_type', {
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

    return OutfitType;
}

export default getOutfitTypes;