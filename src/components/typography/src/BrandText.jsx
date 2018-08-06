// @flow
import * as React from 'react';
import Text from './Text';
import FontFamilies from './styles/FontFamilies';

function BrandText (props: {children: React.Node}) {
  const {children, ...rest} = props;
  return (
    <Text
      fontFamily={FontFamilies.brand}
      {...rest}
    >
      {children}
    </Text>
  );
}
export default BrandText;
