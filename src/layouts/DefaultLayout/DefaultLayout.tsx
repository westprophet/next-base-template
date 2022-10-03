/**
 * Created by westprophet on 03.10.2022
 */

import React from 'react';
import s from './DefaultLayout.module.scss';
import cn from 'classnames';

export default function DefaultLayout({ className, children }: Props) {
  return <main className={cn(s.DefaultLayout, className)}>{children}</main>;
}

DefaultLayout.defaultProps = {
  className: '',
};

interface Props {
  className?: string;
  children: any;
}
