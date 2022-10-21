import { connect } from "react-redux";
import React, { Component } from "react";

type Props = {};

type State = {};

export class login extends Component<Props, State> {
  state = {};

  render() {
    return <div>login</div>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(login);
