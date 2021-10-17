import React from 'react';

import { useServerInfos } from '../../providers/serverInfos';

import * as S from './styles';

const Summary = () => {
   const { 
      selectedServers,
      totalMemory,
      totalCpu,
      totalDisk
   } = useServerInfos();

   return (
      <S.Container>
         <S.Title>
            <h3>Sumário dos recursos dos servidores</h3>
         </S.Title>
         <S.InfosTable>
            <div>
               <table cellSpacing="0" cellPadding="0">
                  <tbody>
                     <tr>
                        <td style={{ backgroundColor: "#F0F0F0", borderBottom: "1px solid #EEE9E9" }}>
                           <div 
                              style={{ 
                                 width: "15rem",
                                 display: "flex",
                                 justifyContent: "center" 
                              }}
                           >
                              Servidores Selecionados
                           </div>
                        </td>
                        <td style={{ borderBottom: "1px solid #EEE9E9" }}>
                           <div style={{ width: "60rem" }}>{selectedServers} servidor(es) selecionado(s)</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={{ backgroundColor: "#F0F0F0", borderBottom: "1px solid #EEE9E9" }}>
                           <div
                              style={{ 
                                 width: "15rem",
                                 display: "flex",
                                 justifyContent: "center" 
                              }}
                           >
                              Total de Memória
                           </div>
                        </td>
                        <td style={{ borderBottom: "1px solid #EEE9E9" }}>
                           <div style={{ width: "60rem" }}>{totalMemory} GB</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={{ backgroundColor: "#F0F0F0", borderBottom: "1px solid #EEE9E9" }}>
                           <div
                              style={{ 
                                 width: "15rem",
                                 display: "flex",
                                 justifyContent: "center" 
                              }}
                           >
                              Total de CPUs
                           </div>
                        </td>
                        <td style={{ borderBottom: "1px solid #EEE9E9" }}>
                           <div style={{ width: "60rem" }}>{totalCpu} vCPUs</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={{ backgroundColor: "#F0F0F0" }}>
                           <div
                              style={{ 
                                 width: "15rem",
                                 display: "flex",
                                 justifyContent: "center" 
                              }}
                           >
                              Total de Discos
                           </div>
                        </td>
                        <td>
                           <div style={{ width: "60rem" }}>{totalDisk} GB</div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </S.InfosTable>
      </S.Container>
   );
};

export default Summary;
