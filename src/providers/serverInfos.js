import React, { createContext, useContext, useState } from 'react';

export const ServerInfosContext = createContext({});

export const ServerInfosProvider = ({ children }) => {
   const [infos, setInfos] = useState(""); 
   const [selectedServers, setSelectedServers] = useState(0);
   const [totalMemory, setTotalMemory] = useState(0);
   const [totalCpu, setTotalCpu] = useState(0);
   const [totalDisk, setTotalDisk] = useState(0);

   return (
      <ServerInfosContext.Provider
         value={{
            infos, setInfos,
            selectedServers, setSelectedServers,
            totalMemory, setTotalMemory,
            totalCpu, setTotalCpu,
            totalDisk, setTotalDisk
         }}
      >
         {children}
      </ServerInfosContext.Provider>
   );
};

export const useServerInfos = () => useContext(ServerInfosContext);
