import { PageHeader } from '../component/modules/header'
import withWebLayout from '../layout/web/withWebLayout'
const Contact = () => {
  return (
    <section>
      <PageHeader title="Contact us" />
    </section>

  )

}

export default withWebLayout(Contact)