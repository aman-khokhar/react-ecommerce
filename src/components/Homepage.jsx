import React from 'react';
import Layout from './Shared/Layout';
import Hero from './Hero/Hero';
import MainSection from './Main-section/Main-section';
import FeaturedCollection from './Featured-collection/Featured-collection';

const Homepage = () => {
  return (
      <>
        <Layout>
            <Hero />
            <MainSection />
            <FeaturedCollection />
        </Layout>
      </>
  );
};

export default Homepage;
