const { model, Schema } = require('mongoose')

const commentSchema = new Schema ({ 
    title: { type: String, required: true },
    message: { type: String, required: true },
    blog: { type: mongoose.Schema.Types. ObjectId, ref: 'Blog' }
}, {
    timestanps: true
})

const Comment = model('Comment', commentSchema)

module.exports = Comment