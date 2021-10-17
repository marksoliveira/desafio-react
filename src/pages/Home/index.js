import React, { useEffect } from 'react';

import { useServerInfos } from '../../providers/serverInfos';
import api from '../../services/api';

import Header from '../../components/Header';
import ServerTable from '../../components/ServerTable';
import Summary from '../../components/Summary';

import * as S from './styles';

const Home = () => {
   const { setInfos } = useServerInfos();

   useEffect(() => {
      getServerInfos();
   }, []);

   const getServerInfos = async () => {
      try {
         const response = await api.get('/');
    
         setInfos(response.data);
      } catch(e) {
         alert("Falha ao buscar informações do servidor");
      };
   };

   return (
      <S.Wrapper>
         <Header />
         <Summary />
         <ServerTable />
      </S.Wrapper>
   );
};

export default Home;
