'use client';
// import CartSidebar from './CartSidebar';
import Logo from './Logo';
import { useEffect, type ReactNode } from 'react';
import { hideLoading } from '../redux/CartSlide';

import Navigation from './Navigation';
import { useDispatch } from '../../node_modules/react-redux/dist/react-redux';
// import Header from './Header';
type Props = {
  children: ReactNode;
};

export default function App({ children }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);
  return (
    <div className="container">
      <header className="header">
        <Logo />
        <Navigation />
        {/* <Header /> */}
        {/* <CartSidebar /> */}
      </header>
      <main className="main">{children}</main>
    </div>
  );
}
