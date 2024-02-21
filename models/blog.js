const { model, Schema } = require('mongoose')

const blogSchema = new Schema ({ 
    title: { type: String, required: true },
    body: { type: String, required: true }, 
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, {
    timestanps: true
})

const Blog = model('Blog', blogSchema)

module.exports = Blog 