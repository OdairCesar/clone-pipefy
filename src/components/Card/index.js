import React from 'react';

import { Container, Label } from './styles';
import avatar from '../../assets/avatar.png'

export default function Card({ data }) {
    return (
        <Container>
            <header>
                {data.labels.map(label => <Label key={label} color={label} />)}
            </header>
            <p>{data.content}</p>
                <img src={data.user? data.user : avatar} alt="Avatar"/>
        </Container>
    );
}
