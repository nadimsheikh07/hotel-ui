import HomeBanner from '../component/slider/homeBanner'
import withWebLayout from '../layout/web/withWebLayout'
import styles from '../styles/Home.module.scss'
const Home = () => {
  return (
    <div className={styles.container}>
      <HomeBanner />
    </div>

  )

}

export default withWebLayout(Home)