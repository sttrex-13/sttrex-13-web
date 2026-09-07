import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import styles from './SiteLayout.module.scss'

const SiteLayout = () => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default SiteLayout
