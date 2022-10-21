import { connect } from "react-redux";
import React, { Component } from "react";

type Props = {};

type State = {};

export class Home extends Component<Props, State> {
  state = {};

  render() {
    return <div>home</div>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
