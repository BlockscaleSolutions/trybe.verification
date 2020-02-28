import AboutSection from "./HomePageContent/AboutSection";
import DropZoneSection from "./HomePageContent/DropZoneSection";
import PartnerSection from "./HomePageContent/PartnersSection";
import { SocialIcon } from 'react-social-icons';

const MainPageContainer = () => (
  <div className="container-fluid">
    <DropZoneSection />
    <AboutSection />
    <div style={{ textAlign: "left" }}>
      <img src="/static/images/convergence.png" width="300" style={{ marginTop: 10, marginBottom: 10 }}/>
      <SocialIcon url="http://twitter.com/__convergence__" style={{ margin: 2 }}/>
      <SocialIcon url="https://www.linkedin.com/company/convergencetech" style={{ margin: 2 }}/>
      <SocialIcon url="https://github.com/BlockscaleSolutions" style={{ margin: 2 }}/>
    </div>
  </div>
);

export default MainPageContainer;
