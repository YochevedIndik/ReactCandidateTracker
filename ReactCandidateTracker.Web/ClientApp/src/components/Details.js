import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import { useStatusCounts } from "../StatusComponent";
import { produce } from "immer";

const Details = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({
        firstName: '', lastName: '', phoneNumber: '', email: '', notes: '', status: ''
    });
    const { updateCounts } = useStatusCounts();
    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/home/getbyid?id=${id}`);
            setCandidate(data);
        }
        getCandidate();

    }, [id]);

    const onUpdateClick = async status => {
        await axios.post('/api/home/updatestatus', { id, status });
        console.log(status);
        const newState = produce(candidate, draft => {
            draft.status = status;
        });
        setCandidate(newState);
        await updateCounts();

    }
  

    const {firstName, lastName, phoneNumber, email, status, notes} = candidate;
   return (
      <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card card-body bg-light'>
                        <h4>First Name: {firstName}</h4>
                        <h4>Last Name: {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone Number: {phoneNumber}</h4>
                        <h4>Notes: {notes}</h4>
                    

                    {candidate.status === "Pending" &&
                        <div><button className='btn btn-danger ' onClick={() => onUpdateClick('refused')}>Reject</button>
                            <button className='btn btn-primary ' onClick={() => onUpdateClick('confirmed')}>Confirm</button></div>}

                            </div>
               </div>
           </div>
       </div>
       </>
       
   )
   
}
export default Details;


