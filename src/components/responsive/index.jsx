// @flow
import * as React from 'react';
import Responsive from 'react-responsive';

type Props = any;

export const Desktop = (props: Props) => <Responsive {...props} minWidth={992} />;
export const Tablet = (props: Props) => <Responsive {...props} minWidth={768} maxWidth={991} />;
export const Mobile = (props: Props) => <Responsive {...props} maxWidth={767} />;
export const Default = (props: Props) => <Responsive {...props} minWidth={768} />;
