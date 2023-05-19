import React, {FC} from 'react';
import './videoContent.css';

interface IProps{
    videoKey: string
}

const VideoContent:FC<IProps> = ({videoKey}) => {
    return (
        <div className={'teaser-video'}>
            <iframe
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
                title="YouTube video"
                allowFullScreen
            ></iframe>
        </div>

    );
};

export default VideoContent;