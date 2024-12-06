import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
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

export default Addchest;
