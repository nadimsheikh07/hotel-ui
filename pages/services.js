import { PageHeader } from '../component/modules/header'
import { ShortServices } from '../component/modules/services'
import withWebLayout from '../layout/web/withWebLayout'
const Services = () => {
  return (
    <section>
      <PageHeader title="Services" />
      <ShortServices />
    </section>
  )

}

export default withWebLayout(Services)