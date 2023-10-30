import Hero from '../../components/hero/Hero';
import LandingPage from '../../components/landingPage/LandingPage';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
     {userInfo ? <Hero /> : <LandingPage />}
    </>
  );
};

export default HomeScreen;