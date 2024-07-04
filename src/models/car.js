import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    mileage: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    fuel: {
        type: String,
        required: true,
    },
    enginecap: {
        type: Number,
        required: true,
    },
    cushion: {
        type: String,
        required: true,
    },
    seat: {
        type: Number,
        required: true,
    },
    gear: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    pnumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    additionalInfo: {
        type: String,
        required: false,
    },
    file1: {
        type: String,
        default: null,
        validate: {
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    file2: {
        type: String,
        default: null,
        validate: {
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    file3: {
        type: String,
        default: null,
        validate: {
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    file4: {
        type: String,
        default: null,
        validate: {
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    file5: {
        type: String,
        default: null,
        validate: {
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    file6: {
        type: String,
        default: null,
        validate: {
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    createOn:{type:Date,default:new Date().getTime()},
});



const Car = mongoose.model('Car', carSchema, 'Cars');

export default Car;
