import React from 'react';
import { AboutDetails, AboutText } from '../component/modules/about';
import { HomeParallax } from '../component/modules/parallax';
import { ShortServices } from '../component/modules/services';
import { HomeBanner } from '../component/slider';
import withWebLayout from '../layout/web/withWebLayout';

const Home = () => (
  <section>
    <HomeBanner />
    <AboutDetails />

    <AboutText title="The shelter is the Outcome of the Dream" details={[
      "Broker ipsum dolor sit amet, consectetuer luxury elit. Carrara marble commodo ligula eget dolor cum sociis cozy penatibus et magnis.",
      "Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust of Cancun with us."
    ]} />
    <ShortServices />
    <HomeParallax />
  </section>
);

export default withWebLayout(Home);
