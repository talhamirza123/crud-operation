
import React from 'react';
import { Link } from 'react-router-dom';
 import  { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const AddUser = ()  => {
    return (
        <Form>
        <FormGroup>
        <>Name</>
        <Input type="text" placeholder="Enter Name"></Input>
        
        </FormGroup>
        <button type="submit" className="btn btn-primary" >Submit</button>
        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
        
        
    )
}