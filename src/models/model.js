import { DataTypes } from "sequelize";

const EmployeeModel = (sequelize) => {
    const Employee = sequelize.define("Employee", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        experience: {
            type: DataTypes.STRING 
        },
        company: {
            type: DataTypes.STRING
        }
    });

    return Employee;
};

export {EmployeeModel};
