import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({embedId}) => (
    <div className='video-responsive'>
        <iframe
            width="400"
            height="225"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;