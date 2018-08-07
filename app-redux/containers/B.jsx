import React from 'react';

class B extends React.Component {
  render() {
    return (
      <p>
        {this.props.city}
      </p>
    );
  };
}
;

export default B;