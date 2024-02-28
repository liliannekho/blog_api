export default function Blogs(props) {
    return(<div>
        {props.blogs.map((blog) => {
            return(
            <article key={blog._id}>
                <h3>{blog.title}</h3>
            </article>)
        })}
    </div>)
}