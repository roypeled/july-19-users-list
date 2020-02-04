const { Schema, model, SchemaTypes } = require("mongoose");
const { CompanySchema } = require("./companies.model");

require("mongoose-type-email");

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
        max: 120,
        validate: {
            validator: v => v%2 === 0,
            message: props => `${props.value} is not even age!`
        },
    },
    username: String,
    email: SchemaTypes.Email,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: Number,
            lng: Number
        }
    },
    phone: String,
    website: String,
    company: {
        type: SchemaTypes.ObjectId,
        ref: 'Company'
    }
});

const UsersModel = model("User", UsersSchema);

module.exports = {
    UsersModel
};