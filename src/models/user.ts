import { DataTypes, Sequelize } from "sequelize"

const getUserModel = (sequelize: Sequelize) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    return User;
}

export { getUserModel };