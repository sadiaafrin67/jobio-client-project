

import Banner from './Banner/Banner';
// import BannerShare from "../../Shared/BannerShare";
import JobCat from '../../Pages/Home/Job/JobCat';
import Sopnsor from '../../Shared/Sopnsor';
import Package from '../../Package/Package';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
         <JobCat></JobCat>
          {/* <BannerShare></BannerShare> */}
          <Sopnsor></Sopnsor>
          <Package></Package>
        </div>
    );
};

export default Home;