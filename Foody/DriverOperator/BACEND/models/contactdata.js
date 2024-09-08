const mongoose = require('mongoose');

const Schema2 = mongoose.Schema;

const contact = new Schema2({
    data : {
        type : String
    }
});

const ContactData = mongoose.model("Contactdata", contact);

module.exports = ContactData;