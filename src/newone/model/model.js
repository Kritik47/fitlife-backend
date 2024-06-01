import { DataTypes } from "sequelize";
const SigninModel = (sequelize) => {
    const Signin = sequelize.define("Signin", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4 
        },
        username: DataTypes.STRING,
        useremail: DataTypes.STRING,
        userpassword: DataTypes.STRING
    });

    return Signin;
}

export default SigninModel;
