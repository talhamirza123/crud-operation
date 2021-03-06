import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { AppReducers } from '../context/AppReducers';

import {
    
    ListGroup,
    ListGroupItem,
    Button
 
} from 'reactstrap';

export const UserList = () => {
    
    const { users , removeUser } = useContext(GlobalContext);
    console.log(users);
        
    return (
    
        <ListGroup>
        
        {users.map(user => (
            
        <ListGroupItem className="d-flex">
        <strong>{user.name}</strong>
        <div className="ml-auto">
        <Link className="btn btn-primary mr-1" to={'/edit/${user.id}'}>Edit</Link>
        <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
        </div>
        
        </ListGroupItem>
        ))}
        </ListGroup>        
    )
}
