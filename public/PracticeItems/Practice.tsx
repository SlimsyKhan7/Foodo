import { Container } from 'react-bootstrap';
import { UseStateComponent } from "./UseStateComponent";
import { UseEffectComponent } from './UseEffectComponent';
import { Javascript } from './Javascript';

export function Practice() {  
    return (
        <Container>
            <UseStateComponent />
            <UseEffectComponent />
            <Javascript/>
        </Container>
    )
}