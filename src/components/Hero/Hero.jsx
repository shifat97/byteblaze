import {Link} from "react-router-dom";
import background from "../../assets/wave.svg";

export default function Hero() {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
    }

    return (
        <div style={backgroundStyle}
             className="flex flex-col items-center justify-center gap-4 min-h-[calc(100vh-116px)]">
            <div>
                <h1 className="text-3xl lg:text-4xl font-bold">Welcome to <span className="bg-gradient-to-r from-primary
                 via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
            </div>
            <div>
                <p className="text-center max-w-[512px]">
                    ByteBlaze is the bridge between the complex world of technology and the curious minds eager to
                    understand it
                </p>
            </div>
            <div className="flex gap-2">
                <Link to="/blogs">
                    <button type="button"
                            className="px-8 py-3 font-semibold border rounded dark:border-purple-800 dark:text-gray-800
                             hover:bg-purple-600 hover:text-white">Read Blogs
                    </button>
                </Link>
                <Link to="/bookmarks">
                    <button type="button"
                            className="px-8 py-3 font-semibold border rounded dark:border-purple-800 dark:text-gray-800
                            hover:bg-purple-600 hover:text-white">Bookmarks
                    </button>
                </Link>
            </div>
        </div>
    )
}