import React from "react";
import autosize from "autosize";
import { User } from "./User";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        user: this.props.user,
        text: "",
      },
    };
  }

  updateComment = (e) => {
    const { value } = e.target;
    autosize(e.target);
    this.setState({
      comment: {
        user: this.props.user,
        text: value,
      },
    });
  };

  render() {
    return (
      <form action="" className="form">
        <textarea
          name="text"
          className="comment-input"
          onChange={this.updateComment}
          cols="10"
          rows="10"
        ></textarea>

        <input
          onClick={() => {
            document.querySelector(".form").reset();
            this.setState({
              comment: {
                user: "",
                text: "",
              },
            });
            this.props.handleSubmit({
              text: this.state.comment.text,
              user: this.props.user,
            });
            // Fix resizing on submit
            // autosize(document.querySelector(".comment-input"));
          }}
          type="button"
          value="Submit"
          className="submit-btn"
        />
        <User users={this.props.users} changeUser={this.props.changeUser} />
      </form>
    );
  }
}
