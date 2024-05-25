import {Link, useLoaderData} from "react-router-dom";
import BlogCard from "../components/BlogCard/BlogCard.jsx";
import placeholderImg from '../assets/404.jpg'

export default function Blogs() {
    const data = useLoaderData();

    return (
        <div className="mt-10 p-4 2xl:container 2xl:mx-auto">
            <Link to={`/blogs/${data[0]?.id}`}>
                <div className="card lg:card-side bg-base-100 shadow-xl border border-purple-800 p-4">
                    <figure>
                        <img src={data[0]?.cover_image || placeholderImg} alt="Album"/>
                    </figure>
                    <div className="pt-4 lg:p-8">
                        <h2 className="card-title text-2xl lg:text-3xl font-bold">{data[0]?.title}</h2>
                        <p className="mt-2">{new Date(data[0]?.published_at).toLocaleDateString()}</p>
                        <p className="mt-4">{data[0]?.description}</p>
                    </div>
                </div>
            </Link>
            <div className="mt-4 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.slice(1,).map((blog) => (
                        <BlogCard key={blog.id} blog={blog}/>
                    ))
                }
            </div>
        </div>
    )
}