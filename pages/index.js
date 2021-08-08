import HomeParallax from '../component/modules/parallax/homeParallax'
import ShortServices from '../component/modules/services'
import HomeBanner from '../component/slider/homeBanner'
import withWebLayout from '../layout/web/withWebLayout'
const Home = () => {
  return (
    <section>
      <HomeBanner />
      <ShortServices />
      <HomeParallax />
    </section>
  )
}

export default withWebLayout(Home)