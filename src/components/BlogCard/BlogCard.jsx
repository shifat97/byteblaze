import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import placeholderImg from '../../assets/404.jpg'

export default function BlogCard({blog}) {
    return (
        <div>
            <Link to={`/blogs/${blog?.id}`}>
                <div className="blog-card card border border-purple-800 p-4 flex flex-col h-full">
                    <figure className="shrink-0">
                        <img className="h-[250px] w-full" src={blog?.cover_image || placeholderImg} alt="Album"/>
                    </figure>
                    <div className="info grow">
                        <h2 className="text-2xl font-bold mt-4">{blog?.title}</h2>
                        <p className="mt-2">{new Date(blog?.published_at).toLocaleDateString()}</p>
                        <p className="mt-4">{blog?.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}


BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
}