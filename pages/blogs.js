import { PageHeader } from '../component/modules/header'
import withWebLayout from '../layout/web/withWebLayout'
const Blogs = () => {
  return (
    <section>
      <PageHeader title="Blogs" />
    </section>

  )

}

export default withWebLayout(Blogs)