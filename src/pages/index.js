import React, { useState } from "react"
import { Link } from "gatsby"
import { Card, Container, Row, Col, ListGroup, Button, Accordion } from 'react-bootstrap'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [toggle, setToggle] = useState(true)

  const toggleButton = () => {
    setToggle(!toggle)
  }

  const accordion = () => {
    return (
      <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                What
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>In "From the Root to the Fruit: Portraits of Black Fathers and their Children" Ken McFarlane presents an ongoing documentary project that celebrates Black fatherhood while counteracting the false narrative of the absentee Black Father.  Originally presented by Traction Company on 41st Street and Haverford in Mantua and curated by Traction artist Sedakial Gebremedhin, this is a second public phase of this ongoing work.  Ken’s brilliant vision and images will be on display for two nights on the exterior walls of the Barnes Foundation, offering a shining counterpunch to a 400 year old system that has poisoned the image of Black Fatherhood in America.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Where
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>The Benjamin Franklin Parkway, at the Barnes Foundation, on the corner of 20th street</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col className='mt-3 text-center'>
              <h1 style={{ fontSize: '8vmin', fontWeight: '400', fontFamily: 'Alfa Slab One'}}>From the Root to the Fruit</h1>
              <p className='mt-0'>Portraits of Black Fathers and their Children by Ken McFarlane</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <Image/>
            <p><em>example rendering</em></p>
          </Col>
        </Row>
          {/* <Button onClick={() => toggleButton()}>{toggle ? 'v1' : 'v2'}</Button>
          {toggle ? accordion() : null} */}
        <Row>
          <Col className='mt-4'>
            <h2>
              What:
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>In "From the Root to the Fruit: Portraits of Black Fathers and their Children" Ken McFarlane presents an ongoing documentary project that celebrates Black fatherhood while counteracting the false narrative of the absentee Black Father.  Originally presented by Traction Company on 41st Street and Haverford in Mantua and curated by Traction artist Sedakial Gebremedhin, this is a second public phase of this ongoing work.  Ken’s brilliant vision and images will be on display for two nights on the exterior walls of the Barnes Foundation, offering a shining counterpunch to a 400 year old system that has poisoned the image of Black Fatherhood in America.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              Where:
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
          <p>The Benjamin Franklin Parkway, at the Barnes Foundation, on the corner of 20th Street.</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.160945523261!2d-75.17528784905686!3d39.96015417931984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c634b159cf11%3A0x8e918cf2f2411980!2sBenjamin%20Franklin%20Pkwy%2C%20Philadelphia%2C%20PA%2019130!5e0!3m2!1sen!2sus!4v1591896908524!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{ border: '0px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              When:
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
          <ListGroup>
            <ListGroup.Item>Saturday, June 20th, 8pm - 11pm <Button className='float-right' href='https://calendar.google.com/event?action=TEMPLATE&tmeid=NzQzMzliMWo0cGE3ZDE4bWhhbnNkaGIzcXIgZG9tYWxyMGhidHJrZnRibzFoNzI1YmoyY2NAZw&tmsrc=domalr0hbtrkftbo1h725bj2cc%40group.calendar.google.com' >
              Add to calendar
            </Button></ListGroup.Item>
            <ListGroup.Item>Sunday, June 21st, 8pm-11pm <Button className='float-right' href='https://calendar.google.com/event?action=TEMPLATE&tmeid=Mmx0ZzRzMGtyMjluMjBhZmwxN282MXIyMmggZG9tYWxyMGhidHJrZnRibzFoNzI1YmoyY2NAZw&tmsrc=domalr0hbtrkftbo1h725bj2cc%40group.calendar.google.com' >
              Add to calendar
            </Button></ListGroup.Item>
          </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className='mt-4'>
            <p>This installation has been supported by the People’s Emergency Center, the Barnes Foundation, WorldStage, the Mantua Civic Association, and Nine Hostage Arts</p>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Image />
          </Col>
        </Row> */}

      </Container>
    </Layout>
  )
}

export default IndexPage
