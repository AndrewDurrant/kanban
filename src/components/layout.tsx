import Header from './header';
import styles from '@/styles/Boards.module.css';

export default function Layout({ children }: any) {
  return (
    <>
      <div className={styles.siteLayoutContainer}>
        <Header/>
        {children}
      </div>
    </>
  )
}