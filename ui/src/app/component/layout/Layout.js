import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});

class Layout extends Component {
  render() {
      return (
          <div className="layoutContainer">
              <div className="layoutContainer_topbar">
                  <h1 className="layoutContainer_topbar_header">Spam Report Dashboard</h1>
              </div>
              <div className="layoutContainer_main">
                  {this.props.children}
              </div>
          </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
