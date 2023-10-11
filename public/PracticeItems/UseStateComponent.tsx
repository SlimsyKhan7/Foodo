import { Container } from "react-bootstrap";
import { Button } from "@mantine/core"
import { useState } from "react";

export function UseStateComponent() {

    const [count, setCount] = useState(1)

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <Container className="flex justify-center mt-44 gap-10 items-center">
            <Button onClick={decrementCount} variant="outline" radius="md" color="red">-</Button>
            <span>{count}</span>
            <Button onClick={incrementCount} variant="outline" radius="md" color="red">+</Button>
        </Container>
    )
}