import React from "react";

class UserForm extends React.Component {
  // form validation

  constructor(props) {
    super(props);

    this.state = {
      firstNameOk: false,
      secondNameOk: false,
      userNameOk: false,
      avatarUrlOk: false,
    };
  }

  firstNameValidation = (e) => {
    this.setState({
      firstNameOk: e.target.value ? true : false,
    });
  };
  secondNameValidation = (e) => {
    this.setState({
      secondNameOk: e.target.value ? true : false,
    });
  };
  userNameValidation = (e) => {
    let exists = false;
    this.props.users.forEach((user) => {
      if (e.target.value === user.userName) {
        console.log("User exists");
        this.setState({
          userNameOk: false,
        });
        exists = true;
      }
    });
    console.log("codigo llega aqui");
    // e.target.value;
    if (!exists) {
      this.setState({
        userNameOk: true,
      });
    }
  };
  avatarUrlValidation = (e) => {
    this.setState({
      avatarUrlOk: e.target.value ? true : false,
    });
  };

  render() {
    if (this.props.show) {
      return (
        <form action="">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            className="first-name-input"
            placeholder="first name goes here"
            onChange={this.firstNameValidation}
          />
          <label htmlFor="second-name">Second Name</label>
          <input
            type="text"
            name="second-name"
            className="second-name-input"
            placeholder="second name goes here"
            onChange={this.secondNameValidation}
          />
          <label htmlFor="user-name">User Name</label>
          <input
            type="text"
            name="user-name"
            className="user-name-input"
            placeholder="username goes here"
            onChange={this.userNameValidation}
          />
          <label htmlFor="profile-pic">Profile picture</label>
          <input
            type="text"
            name="profile-pic"
            className="profile-pic-input"
            placeholder="profile picture url "
            onChange={this.avatarUrlValidation}
          />
          <input
            type="button"
            value="Add New User"
            onClick={() => {
              if (!Object.values(this.state).includes(false)) {
                console.log(document.querySelector(".first-name-input").value);
                const firstName =
                  document.querySelector(".first-name-input").value;
                const secondName =
                  document.querySelector(".second-name-input").value;
                const userName =
                  document.querySelector(".user-name-input").value;
                const avatarUrl =
                  document.querySelector(".profile-pic-input").value;
                this.props.addUser({
                  firstName,
                  secondName,
                  userName,
                  avatarUrl,
                });
              }
            }}
          />
        </form>
      );
    } else {
      return <></>;
    }
  }
}

export class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formState: false,
    };
  }

  toggleForm = () => {
    console.log("toggle form");
    console.log(this.state.formState);
    this.setState({
      formState: !this.state.formState,
    });
    return this.state.formState;
  };

  render() {
    return (
      <nav>
        {/* <ul>
          <li>
            <ion-icon class="icon" name="person-add-outline"></ion-icon>
          </li>
        </ul> */}

        <button onClick={this.toggleForm}>
          {this.state.formState ? "Cancel" : "Add User"}
        </button>
        <UserForm
          show={this.state.formState}
          addUser={this.props.addUser}
          users={this.props.users}
        />
      </nav>
    );
  }
}
