import React from 'react';

import react from '../../assets/react.jpeg';

import * as S from './styles';

const Header = () => {
   return (
      <S.NavHeader>
         <S.Logo>
            <img src={react} alt="react" />
         </S.Logo>
         <S.Title>
            <h3>Desafio React JS - Exposição de dados de servidores em Datatable</h3>
         </S.Title>
      </S.NavHeader>
   );
};

export default Header;
