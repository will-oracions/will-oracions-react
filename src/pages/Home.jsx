import React from 'react';
import HomeBanner from '../components/home/HomeBanner';
import HomeSkills from '../components/home/HomeSkills';
import HomeCoding from '../components/home/HomeCoding';
import HomeProjects from '../components/home/HomeProjects';
import HomeContact from '../components/home/HomeContact';
import HomeCertifications from '../components/home/HomeCertifcations';

const Home = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);
  
  return <>
    <HomeBanner />
    <HomeSkills />
    <HomeCertifications />
    <HomeCoding />
    <HomeProjects />
    <HomeContact />
  </>;
}

export default Home;