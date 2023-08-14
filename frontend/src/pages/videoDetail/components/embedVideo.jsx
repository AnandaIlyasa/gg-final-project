import PropTypes from 'prop-types';

export default function EmbedVideo({ embedUrl }) {
    return (
        <div className="video-responsive">
            <iframe
                width="100%"
                height="480"
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                allowFullScreen
                title="Embedded youtube"
            ></iframe>
        </div>
    )
}

EmbedVideo.propTypes = {
    embedUrl: PropTypes.string
}