import React, { Component } from "react";
import { observer, PropTypes } from "mobx-react";
import _ from "lodash";

import Profile from "./components/Profile";
import Selection from "./components/Selection";

const propTypes = {
  store: PropTypes.object,
};

@observer
class App extends Component {
  componentWillMount() {
    // this.props.store.getUsers();
  }

  renderProfiles() {
    return this.props.store.users.map((user) => (
      <Profile selected={user.id === this.props.store.selectedId} />
    ));
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
