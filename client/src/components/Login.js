import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {

    const usernameRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        
        onIdSubmit(usernameRef.current.value)

    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }
 
    return (
        <Container className="align-items-center d-flex" style= {{
            height: '100vh'
        }}>
            <Form onSubmit = {handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter your username</Form.Label>
                    <Form.Control type='text' ref={usernameRef}></Form.Control>
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId} variant="secondary" className = "mr-2">Sign Up</Button>
            </Form>
        </Container>
    )
}