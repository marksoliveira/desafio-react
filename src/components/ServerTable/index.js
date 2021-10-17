import React, { useState } from 'react';

import { useServerInfos } from '../../providers/serverInfos';

import * as S from './styles';

const ServerTable = () => {
   const [servers, setServers] = useState([]);
   const { 
      infos, selectedServers, 
      setSelectedServers, totalMemory, 
      setTotalMemory, totalCpu, 
      setTotalCpu, totalDisk, setTotalDisk
   } = useServerInfos();

   const handleChange = (e, item) => {
      if (servers.includes(e.target.value)) {
         const newArr = servers.filter((server) => server !== e.target.value);
         setServers(newArr);

         setSelectedServers(selectedServers - 1);
         setTotalMemory(totalMemory - item.memoryProvisioned);
         setTotalCpu(totalCpu - item.cpuProvisioned);
         setTotalDisk(totalDisk - item.totalDiskGB);

      } else {
         setServers([...servers, e.target.value]);

         setSelectedServers(selectedServers + 1);
         setTotalMemory(totalMemory + item.memoryProvisioned);
         setTotalCpu(totalCpu + item.cpuProvisioned);
         setTotalDisk(totalDisk + item.totalDiskGB);
      }
   };

   return (
      <S.Container>
         <S.Title>
            <h3>Tabela de Servidores</h3>
         </S.Title>
         <S.Table>
            <div>
               <table cellSpacing="0" cellPadding="0">
                  <thead>
                     <tr style={{ backgroundColor: "#F0F0F0" }}>
                        <th style={{ width: "6rem" }}>Select</th>
                        <th style={{ width: "15rem" }}>Hostname</th>
                        <th style={{ width: "15rem" }}>Memória</th>
                        <th style={{ width: "15rem" }}>vCPUs</th>
                        <th style={{ width: "15rem" }}>Disco</th>
                        <th style={{ width: "15rem" }}>IP</th>
                     </tr>
                  </thead>
                  <tbody>
                     {infos ? infos.map((item, index) => {
                           return <tr key={index}>
                              <td>
                                 <input
                                    type="checkbox"
                                    onChange={(e) => handleChange(e, item.configuracao)}
                                    value={index + 1}
                                 />
                              </td>
                              <td>Server {index + 1}</td>
                              <td>{item.configuracao.memoryProvisioned} GB</td>
                              <td>{item.configuracao.cpuProvisioned} GB</td>
                              <td>{item.configuracao.totalDiskGB} GB</td>
                              <td>{item.configuracao.ip}</td>
                           </tr>
                        })
                     : null 
                     }
                  </tbody>
               </table>
            </div>
         </S.Table>
      </S.Container>
   );
};

export default ServerTable;
