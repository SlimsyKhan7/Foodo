import { Container } from 'react-bootstrap';
import { Button } from '@mantine/core';

export function Javascript() {


    function colorChange() {

    }

    return (
        <Container>
            <div className='mt-44 flex justify-center'>
                <Button variant='outline' onClick={colorChange}>Click me</Button>
            </div>
            <h1 className='text-center'>Hello</h1>
        </Container>
    )
}