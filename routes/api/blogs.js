const express = require('express')
const router = express.Router()
const blogsCtrl = require('../../controllers/api/blogs')
const userCtrl = require('../../controllers/api/user')

router.get('/', userCtrl.auth, blogsCtrl.indexBlogs, blogsCtrl.jsonBlogs)

router.post('/', userCtrl.auth, blogsCtrl.createBlog, blogsCtrl.jsonBlog)

router.get('/:id', userCtrl.auth, blogsCtrl.showBlog, blogsCtrl.jsonBlog)

router.put('/:id', userCtrl.auth, blogsCtrl.updateBlog, blogsCtrl.jsonBlog)

router.delete('/:id', userCtrl.auth, blogsCtrl.deleteBlog, blogsCtrl.jsonBlog)

module.exports = router 
