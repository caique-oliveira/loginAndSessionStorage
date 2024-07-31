/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterUser from '../../Components/RegisterUser';
import * as S from './Home.styles';

const Home = ({ data }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    const isLogged = auth === "isLogged";

    if(!isLogged) {
      navigate("/login");
      window.location.reload();
    };
  },[])

    return (
        <S.Container>
          <RegisterUser />
        </S.Container>
    );
};

export default Home;
