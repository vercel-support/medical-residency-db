import React from 'react';
import Header from '@module/Header/Header';
import styles from './Default.module.scss';
import Footer from '@module/Footer/Footer';
import { setLazyProp } from 'next/dist/next-server/server/api-utils';

type Props = {
  children: React.ReactNode;
};

const Default: React.FC<Props> = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Default;

