import Banner from '../components/Banner'
import bannerHome from '../assets/images/banner_home_kasa.jpg'

import Cards from '../components/Cards';


const Home = () => {
  return(
    <div className="home">

        <Banner 
               img={bannerHome}
               title='Chez vous, partout et ailleurs'
               /> 
        <Cards />
    </div>
)
};

export default Home;
