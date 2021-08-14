import React from 'react';
import { AboutDetails, AboutText } from '../component/modules/about';
import { PageHeader } from '../component/modules/header';
import { HomeParallax } from '../component/modules/parallax';
import withWebLayout from '../layout/web/withWebLayout';

const About = () => (
  <section>
    <PageHeader title="About Us" />
    <AboutDetails />
    <AboutText title="The shelter is the Outcome of the Dream" details={[
      "Broker ipsum dolor sit amet, consectetuer luxury elit. Carrara marble commodo ligula eget dolor cum sociis cozy penatibus et magnis.",
      "Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust of Cancun with us."
    ]} />
    <HomeParallax />
  </section>
);

export default withWebLayout(About);
