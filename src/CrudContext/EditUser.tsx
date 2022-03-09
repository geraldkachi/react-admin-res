import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from '../context/GlbalState';

const EditUser = (props: any) => {
    const navigate = useNavigate();
    const { 
        // editUser, 
        users } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser] = useState({
        id: '',
      name: ''
    })
    // const history = useHistory();
    const currentUserId = props.match.params.id;
    
    useEffect(() => {
      const userId = currentUserId;
      const selectedUser: any = users.find((user: any) => user.id === userId);
      setSelectedUser(selectedUser);
    }, [currentUserId, users])
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>  setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    

    // let navigate = useNavigate();
    // let location = useLocation();
    // let params = useParams();
    // let invoice = getInvoice(parseInt(params.invoiceId, 10));

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // editUser(selectedUser);
        navigate('/')
    }

    return (
        <div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter Name..." />
            </div>
            <button type="submit" className="btn btn-primary">Edit Name</button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </div>
    )
}

export default EditUser