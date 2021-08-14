import React from 'react';
import { AboutDetails } from '../component/modules/about/aboutDetails';
import { HomeParallax } from '../component/modules/parallax';
import { ShortServices } from '../component/modules/services';
import { HomeBanner } from '../component/slider';
import withWebLayout from '../layout/web/withWebLayout';

const Home = () => (
  <section>
    <HomeBanner />
    <AboutDetails />
    <ShortServices />
    <HomeParallax />
  </section>
);

export default withWebLayout(Home);
