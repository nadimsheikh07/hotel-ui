import React from 'react';
import { PageHeader } from '../component/modules/header';
import { ShortServices } from '../component/modules/services';
import withWebLayout from '../layout/web/withWebLayout';

const Services = () => (
  <section>
    <PageHeader title="Services" />
    <ShortServices />
  </section>
);

export default withWebLayout(Services);
