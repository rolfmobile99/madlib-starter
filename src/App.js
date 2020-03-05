// two page app using React components
// -rolf

import React, { Component } from "react";

import "./styles.css";

// var pages = {
//   start: {
//     content: (getData, setData) => (
//       <p>
//         Let's play a game!
//         <br />
//         But first, what is your name?
//         <br />
//         <input
//           type="text"
//           value={getData("name")}
//           onChange={event => setData("name", event.target.value)}
//         />
//       </p>
//     ),
//     buttons: [{ label: "Get Started", page: "welcome" }]
//   },
//   welcome: {
//     content: (getData, setData) => <p>Welcome {getData("name")}!</p>,
//     buttons: [{ label: "Next", page: "start" }]
//   }
// };

class StartPage extends Component {
  render() {
    var nameStyle = {
      //border: "2px solid red"
    };

    return (
      <p>
        Let's play a game!
        <br />
        <br />
        But first, what is your name?
        <br />
        <input
          type="text"
          style={nameStyle}
          value={this.props.getData("name")}
          onChange={event => this.props.setData("name", event.target.value)}
        />
        <br />
        <br />
        <button onClick={() => this.props.goToPage(WelcomePage)}>
          Continue...
        </button>
      </p>
    );
  }
}

class WelcomePage extends Component {
  render() {
    return (
      <p>
        Welcome {this.props.getData("name")}!
        <br />
        We don't have a game at the moment.. sorry!
        <br />
        <br />
        <button onClick={() => this.props.goToPage(StartPage)}>
          Start Over
        </button>
      </p>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: StartPage,
      name: ""
    };
  }

  goToPage(page) {
    this.setState({
      page: page
    });
  }

  getData(dataName) {
    return this.state[dataName];
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    //var pageData = pages[this.state.page];

    return (
      <div className="App">
        <this.state.page
          getData={name => this.getData(name)}
          setData={(name, value) => this.setData(name, value)}
          goToPage={page => this.goToPage(page)}
        />
      </div>
    );
  }
}

export default App;
