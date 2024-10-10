'use client';
import Navigation from './Navigation';
// import CartSidebar from './CartSidebar';
import Logo from './Logo';
import { useEffect } from 'react';
import { hideLoading } from '../redux/CartSlide';
import { useDispatch } from 'react-redux';

// import Header from './Header';

export default function App({ children }) {
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
      <main className='main'>{children}</main>
    </div>
  );
}
