import React from 'react';
import { PageHeader } from '../component/modules/header';
import withWebLayout from '../layout/web/withWebLayout';

const Rooms = () => (
  <section>
    <PageHeader title="Rooms" />
  </section>
);

export default withWebLayout(Rooms);
