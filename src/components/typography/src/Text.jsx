// @flow
import * as React from 'react';
import FontFamilies from './styles/FontFamilies';
import TextStyles from './styles/TextStyles';
import TextColors from './styles/TextColors';

/* eslint-disable react/require-default-props */
type Props = {
  size: number,
  color: string,
  textStyles: {},
  fontFamily: string,
  children: React.Node,
  style: {},
};

export default class Text extends React.PureComponent<Props> {
  static defaultProps = {
    size: 500,
    color: TextColors.default,
    textStyles: TextStyles,
    fontFamily: FontFamilies.display,
    style: {},
  };

  render() {
    const {children, size, color, textStyles, fontFamily, style, ...props} = this.props;
    const textStyle = textStyles[size];

    return (
      <span
        style={{
          color: TextColors[color] || color,
          fontFamily: FontFamilies[fontFamily] || fontFamily,
          ...textStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </span>
    );
  }
}
