import { PageHeader } from '../component/modules/header'
import withWebLayout from '../layout/web/withWebLayout'
const Rooms = () => {
  return (
    <section>
      <PageHeader title="Rooms" />      
    </section>
  )

}

export default withWebLayout(Rooms)