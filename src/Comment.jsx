function Avatar(props) {
  return (
    <img
      src={props.user.avatarUrl}
      alt={props.user.name}
      className="profile-pic"
    />
  );
}

function UserInfo(props) {
  return (
    <div className="userInfo">
      <Avatar user={props.user} />
      <p>
        {props.user.firstName} {props.user.secondName} <br />
        <span>@{props.user.userName}</span>
      </p>
    </div>
  );
}

export function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.comment.user} />
      <div>
        <p className="comment__text">{props.comment.text}</p>
      </div>
    </div>
  );
}

export function Comments(props) {
  const rows = props.comments.map((comment, i) => {
    return <Comment comment={comment} key={i} />;
  });

  return <div className="comments">{rows}</div>;
}
