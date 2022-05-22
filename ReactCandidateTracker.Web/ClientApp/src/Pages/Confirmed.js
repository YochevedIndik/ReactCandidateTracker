import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CandidateTable from "../components/CandidateTable";

const Confirmed = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getConfirmed = async () => {
            const { data } = await axios.get('api/home/getconfirmed',);
            setCandidates(data);
        }
       getConfirmed();
    }, []);

    return (
        <>
        <h1>Confirmed</h1>
         <CandidateTable candidates={candidates}></CandidateTable>
         </>
    )
}
export default Confirmed;