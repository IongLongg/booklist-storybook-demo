import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Book } from './Card.stories'

export default {
    title : 'Card Deck'
}

export const CardDeck = () => (
    <Container>
        <Row>
            <Col>
                <Book/>
            </Col>
            <Col>
                <Book/>
            </Col>
            <Col>
                <Book/>
            </Col>
            <Col>
                <Book/>
            </Col>
        </Row>
    </Container>
)
CardDeck.storyName = 'List Book'