import React, { Component } from "react";
import { observer, PropTypes } from "mobx-react";
import _ from "lodash";

import Profile from "./Profile";
import Selection from "./Selection";

const propTypes = {
  store: PropTypes.object,
};

// @observer
class App extends Component {
  componentWillMount() {}

  render() {
    return <div className="App"></div>;
  }
}

export default App;
