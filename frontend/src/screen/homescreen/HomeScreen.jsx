
//HOME SCREEN 
import Hero from '../../components/hero/Hero';
import LandingPage from '../../components/landingPage/LandingPage';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  //CHECKING USER INFO TRUE OR NOT
  return (
    <>
     {userInfo ? <Hero /> : <LandingPage />}
    </>
  );
};

export default HomeScreen;