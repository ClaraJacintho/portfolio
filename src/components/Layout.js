import React from 'react';
import Container from 'react-bootstrap/Container';
import "./Layout.css"
export const Layout = (props) => (
    <div className="big background">
        <Container>
            {props.children}
        </Container>
    </div>
)

