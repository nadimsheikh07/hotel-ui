import React from 'react';
import { PageHeader } from '../component/modules/header';
import withWebLayout from '../layout/web/withWebLayout';

const Blogs = () => (
  <section>
    <PageHeader title="Blogs" />
  </section>
);

export default withWebLayout(Blogs);
