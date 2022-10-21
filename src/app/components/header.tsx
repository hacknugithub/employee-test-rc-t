import { connect } from "react-redux";
import React, { Component } from "react";

type Props = {};

type State = {};

export class header extends Component<Props, State> {
  state = {};

  render() {
    return <div>header</div>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(header);
