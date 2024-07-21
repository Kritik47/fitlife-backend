import { DataTypes } from "sequelize";
const AddchestModel = (sequelize) => {
    const Addchest = sequelize.define("Addchest", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        exercise: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        referenceLink: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Addchest;
};

export default AddchestModel;
