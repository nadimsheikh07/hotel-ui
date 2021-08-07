import withWebLayout from '../layout/web/withWebLayout'
import styles from '../styles/Home.module.scss'
const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>

  )

}

export default withWebLayout(Home)