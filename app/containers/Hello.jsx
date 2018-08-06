import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../actions/userinfo'

import A from './A'
import B from './B'
import C from './C'

class Hello extends React.Component{
  render () {
    return (
      <div>
        <A userId={this.props.userInfo.userId}></A>
        <br/>
        <B city={this.props.userInfo.city}></B>
        <br/>
        <C actions={this.props.userinfoActions}></C>
      </div>
    );
  };
  componentDidMount () {
    this.props.userinfoActions.login({
      userId: 'abc',
      city: 'beijing'
    });
  }
};
function mapStateToProps(state) {
  console.log(state);
  return {
    userInfo: state.userInfo
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);