import React, {useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { useStatusCounts } from "../components/StatusComponent";

const AddCandidate = () =>{
    const [candidate, setCandidate] = useState({
        firstName:'', lastName:'', email:'', phoneNumber:'', notes:'', status:''
    });
    const history = useHistory();
    const {updateCounts} = useStatusCounts();

    const onSubmitClick = async() =>{
        candidate.status = 'pending';
       await axios.post('/api/home/addcandidate', candidate);
       updateCounts();
       history.push('/');
    }

    const onTextChange = e =>{
setCandidate({
    ...candidate,
    [e.target.name] : e.target.value
})


    }
    return(
        
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        
                            <input type="text" onChange={onTextChange} name="firstName" placeholder="First Name" className="form-control" />
                            <br />
                            <input type="text" onChange={onTextChange} name="lastName" placeholder="Last Name" className="form-control" />
                            <br />
                            <input type="text" onChange={onTextChange} name="email" placeholder="Email" className="form-control" />
                            <br />
                            <input type="text" onChange={onTextChange} name="phoneNumber" placeholder="Phone Number" className="form-control" />
                            <br />
                            <textarea rows="5" onChange={onTextChange} className="form-control" name="notes"></textarea>
                            <br />
                            <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                        
                    </div>
                </div>
            </div>
        )
}
export default AddCandidate;
    

    
