import PropTypes from 'prop-types';

export default function CommentForm({ formData, handleSubmit, handleInputChange }) {
    return (
        <form id="comment-form" onSubmit={handleSubmit}>
            <input id="username-input" type="text" onChange={handleInputChange} placeholder="username" name="username" value={formData.username} required />
            <textarea rows="2" id="comment-input" type="text" onChange={handleInputChange} placeholder="comment" name="comment" value={formData.comment} required />
            <br />
            <button type="submit">Send</button>
        </form>
    );
}

CommentForm.propTypes = {
    formData: PropTypes.shape({
        username: PropTypes.string,
        comment: PropTypes.string,
    }),
    handleSubmit: PropTypes.func,
    handleInputChange: PropTypes.func
}