import React, { Component } from "react";
import { Comments } from "./Comment";
import { Form } from "./Form";
// import { User } from "./User";
import { Navigation } from "./Navigation";
import "./primitive.css";
import "./style.css";

export class App extends Component {
  users = [
    {
      firstName: "Eliot",
      secondName: "Elsa",
      userName: "EliotSable",
      avatarUrl:
        "https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    },
    {
      firstName: "Marcos",
      secondName: "Martinez",
      userName: "YorkShire22",
      avatarUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      firstName: "Lizzie",
      secondName: "Tomino",
      userName: "Lzi33T0mi0",
      avatarUrl: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      user: this.users[0],
      users: [...this.users],
    };
  }

  handleSubmit = (comment) => {
    if (comment.text.length > 0) {
      this.setState({
        comments: [...this.state.comments, comment],
      });
    }
  };

  // add user
  addUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };

  changeUser = (e) => {
    // console.log(e.target.value);
    const userName = e.target.value;
    const [user] = this.state.users.filter(
      (user) => user.userName === userName
    );
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <Navigation addUser={this.addUser} users={this.state.users} />
          <Comments comments={this.state.comments} />
          <Form
            handleSubmit={this.handleSubmit}
            user={this.state.user}
            users={this.state.users}
            changeUser={this.changeUser}
          />
        </div>
      </>
    );
  }
}
