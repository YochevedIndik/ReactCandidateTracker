import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CandidateTable from "../components/CandidateTable";

const Rejected = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getRejected = async () => {
            const { data } = await axios.get('api/home/getrejected',);
            setCandidates(data);
        }
       getRejected();
    }, []);

    return (
        <>
        <h1>Rejected</h1>
         <CandidateTable candidates={candidates}></CandidateTable>
         </>
    )
}
export default Rejected;