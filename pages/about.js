import { AboutDetails } from '../component/modules/about/aboutDetails'
import { PageHeader } from '../component/modules/header'
import { HomeParallax } from '../component/modules/parallax'
import withWebLayout from '../layout/web/withWebLayout'
const About = () => {
  return (
    <section>
      <PageHeader title="About Us" />
      <AboutDetails />
      <HomeParallax />
    </section>
  )
}

export default withWebLayout(About)