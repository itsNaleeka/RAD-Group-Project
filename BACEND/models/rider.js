const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const riderSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    nic: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                // Example NIC format validation for Sri Lanka (Old Format: 123456789V, New Format: 1234567890123)
                return /^[0-9]{9}[vVxX]$/.test(v) || /^[0-9]{12}$/.test(v);
            },
            message: props => `${props.value} is not a valid NIC number!`
        }
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Example validation for Sri Lankan phone numbers (starting with 0, followed by 9 digits)
                return /^0\d{9}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    vehicleType: {
        type: String,
        required: true,
        enum: ['Car', 'Van', 'Bicycle', 'Scooter', 'Motorbike', 'Truck'] // Enum for vehicle types
    },
    vehicleNumber: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                // Common vehicle number formats in Sri Lanka (e.g., ABC-1234, WP ABC-1234)
                return /^[A-Z]{2,3}-\d{4}$/.test(v) || /^[A-Z]{2}\s[A-Z]{2,3}-\d{4}$/.test(v);
            },
            message: props => `${props.value} is not a valid vehicle number!`
        }
    }
}, {
    timestamps: true
});

const Rider = mongoose.model("Rider", riderSchema);

module.exports = Rider;
