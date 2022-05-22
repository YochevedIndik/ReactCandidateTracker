import React, {useState} from "react";

const CandidateTable = ({candidates}) =>{
 const [viewNotes, setViewNotes] = useState();

    return (
        <>
        
        <button className="btn btn-info" onClick={() => setViewNotes(!viewNotes)}>Toggle Notes</button>
         <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        {viewNotes && <th>Notes</th>}
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(c => {
                        return <tr key={c.Id}>
                           <td> {c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.phoneNumber}</td>
                            <td>{c.email}</td>
                            {viewNotes && <td>{c.notes}</td>}
                        </tr>

                    })}
                </tbody>
            </table>
    
        </>
    )
}
export default CandidateTable;

