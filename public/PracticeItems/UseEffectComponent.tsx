import { Container } from 'react-bootstrap';
import { Button } from '@mantine/core';
import { useState, useEffect } from 'react';


export function UseEffectComponent() {

    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => { 
        console.log('render')
    }, [resourceType])

    return (
        <Container>
            <div className='flex justify-center mt-32 gap-10'>
                <Button onClick={() => setResourceType('post')} variant='outline'>Posts</Button>
                <Button onClick={() => setResourceType('users')} variant='outline'>Users</Button>
                <Button onClick={() => setResourceType('comments')} variant='outline'>Comments</Button>
            </div>
            <h1 className='text-center'>{resourceType}</h1>
        </Container>
    )
}