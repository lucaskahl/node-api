const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const FilmeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

FilmeSchema.plugin(mongoosePaginate);


mongoose.model('Filme', FilmeSchema);