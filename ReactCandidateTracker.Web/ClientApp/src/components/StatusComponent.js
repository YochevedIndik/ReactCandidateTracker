import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const StatusContext = createContext();

const StatusContextComponent = ({children}) => {

    const [rejectedCount, setRejectedCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);


    const updateCounts = async() =>{
        const pending = await axios.get('/api/home/getpendingcount');
        setPendingCount(pending.data);
        const confirmed = await axios.get('/api/home/getconfirmedcount');
        setConfirmedCount(confirmed.data);
        const rejected = await axios.get('api/home/getrejectedcount');
        setRejectedCount(rejected.data);
        
    }
    
    useEffect(() =>{
        updateCounts();
    }, []);

    const obj ={
        rejectedCount,
        confirmedCount, 
        pendingCount, 
        updateCounts,
    }
    return(
        <StatusContext.Provider value={obj}>
            {children}
           
        </StatusContext.Provider>
       
    )

}


const useStatusCounts = () => useContext(StatusContext);
export { StatusContextComponent, useStatusCounts };
