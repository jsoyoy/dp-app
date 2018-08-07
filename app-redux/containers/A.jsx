import React from 'react';

class A extends React.Component {
  render() {
    return (
      <p>
        {this.props.userId}
      </p>
    );
  };
}
;

export default A;