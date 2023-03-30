import './commentCard.css';
import { FaThumbsUp } from 'react-icons/fa/index.js';

function CommentCard(props) {
    return (
        <div className="comment-card">
            <div className="comment-details">
                <div className="commentator">{props.comment.username}</div>
                <div className="comment-date">{props.comment.date}</div>
            </div>
            <div className="comment-text">{props.comment.text}</div>
            <div className="comment-like">
                <FaThumbsUp className="like-icon" />
                <div className="like-count">{props.comment.likes}</div>
            </div>
        </div>
    )
}
export default CommentCard;
