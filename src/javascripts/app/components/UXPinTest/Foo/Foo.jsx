import React from 'react';
import PropTypes from 'prop-types';

const Foo = (props) => {
  return <div>{props.children}</div>;
};
Foo.propTypes = {
  /**
   * The content of Foo.
   */
  children: PropTypes.node,
};
export default Foo;
