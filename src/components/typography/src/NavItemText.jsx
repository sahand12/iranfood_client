// @flow
import * as React from 'react';
import Text from './Text';

function NavItemText (props: {children: React.Node}) {
  const {children, ...rest} = props;
  return (
    <Text
      style={{
        fontWeight: '400',
        fontSize: '14px',
      }}
      {...rest}
    >
      {children}
    </Text>
  );
}
export default NavItemText;
