import ReactPlayer from "react-player";
import { Button } from "reactstrap";

const VideoPlayerComponent = ({ videoURL, goback }) => {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
            <Button
                onClick={goback}
                className="text-white bg-gray-800 px-4 py-2 mb-4 rounded hover:bg-gray-600"
            >
                ⬅ Back
            </Button>

            <div className="w-full max-w-l">
                <ReactPlayer
                    url={videoURL}
                    controls
                    playing
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default VideoPlayerComponent;