import { Container } from 'react-bootstrap'
import PageHeader from '../component/modules/pageHeader'
import HomeParallax from '../component/modules/parallax/homeParallax'
import withWebLayout from '../layout/web/withWebLayout'
const About = () => {
  return (
    <section>
      <PageHeader title="About Us" />
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt.
        </p>
      </Container>
      <HomeParallax />
    </section>
  )
}

export default withWebLayout(About)