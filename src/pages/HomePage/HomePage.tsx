/**
 * Created by westprophet on 03.10.2022
 */

import React from 'react';
import s from './HomePage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'layouts/DefaultLayout';

export default function HomePage({ className }: Props) {
  return (
    <DefaultLayout className={cn(s.HomePage, className)}>
      <div>HomePage</div>
    </DefaultLayout>
  );
}

HomePage.defaultProps = {
  className: '',
};

interface Props {
  className?: string;
}
