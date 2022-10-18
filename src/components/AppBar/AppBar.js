import { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import authContext from '../../contexts/auth/context.js';
import styles from './Appbar.module.css';
import { useLayoutEffect } from 'react';

export default function Appbar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);

  useLayoutEffect(() => {}, []);

  return (
    <header className={styles.header}>
      <Navigation />

      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Войти
        </button>
      )}
    </header>
  );
}
