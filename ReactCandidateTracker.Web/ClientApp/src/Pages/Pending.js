import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pending = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getPending = async () => {
            const { data } = await axios.get('api/home/getpending');
            setCandidates(data);
        }
       getPending();
    }, []);

    return (
        <>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(c => {
                        return <tr key={c.Id}>
                            <td>
                                <Link to={`/details/${c.id}`}>View Details</Link>

                            </td>
                            <td> {c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.phoneNumber}</td>
                            <td>{c.email}</td>
                        </tr>

                    })}
                </tbody>
            </table>
        </>
    )
}
export default Pending;