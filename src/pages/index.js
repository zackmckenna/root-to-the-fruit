import React, { useState } from "react"
import { Link } from "gatsby"
import { Card, Container, Row, Col, ListGroup, Button, Image } from 'react-bootstrap'

import Layout from "../components/layout"
import barnes from '../images/index.jpg'
import SEO from "../components/seo"
import './index.css'

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedInShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon
} from 'react-share'

const IndexPage = () => {
  const [toggle, setToggle] = useState(true)

  const toggleButton = () => {
    setToggle(!toggle)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col className='mt-3 text-center'>
              <h2 style={{ fontSize: '8vmin', fontWeight: '400', fontFamily: 'Alfa Slab One'}}>From the Root to the Fruit: Portraits of Black Fathers and their Children</h2>
              <p className='mt-0'>by Ken McFarlane</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <Image alt="Projection of Erik and his son with text on the Barnes" src={barnes} />
          </Col>
        </Row>
          {/* <Button onClick={() => toggleButton()}>{toggle ? 'v1' : 'v2'}</Button>
          {toggle ? accordion() : null} */}
        <Row>
          <Col>
            <p>In <em>"From the Root to the Fruit: Portraits of Black Fathers and their Children"</em> <a target="_blank" style={{ textDecoration: 'none', color:'#CB6137'}} href="https://www.kenmcfarlanephoto.com/">Ken McFarlane</a> presents an ongoing documentary project that celebrates Black fatherhood while deconstructing the false narrative of the absentee Black Father.  Originally presented by <a target="_blank" style={{ textDecoration: 'none', color:'#CB6137'}} href="https://tractioncompany.com/">Traction Company</a> on 41st Street and Haverford in Mantua and curated by Traction artist Sedakial Gebremedhin, this is a second public phase of this ongoing work. McFarlane’s work amplifies images of strength, dignity, pride and success to drown out the cacophony of negative imagery surrounding the black body.</p>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col>
            <h2>
              When:
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup >
              <ListGroup.Item>Saturday, June 20th, 8pm - 11pm<Button className='calendar_button float-right' href='https://calendar.google.com/event?action=TEMPLATE&tmeid=NzQzMzliMWo0cGE3ZDE4bWhhbnNkaGIzcXIgZG9tYWxyMGhidHJrZnRibzFoNzI1YmoyY2NAZw&tmsrc=domalr0hbtrkftbo1h725bj2cc%40group.calendar.google.com' >
                Add to calendar
              </Button></ListGroup.Item>
              <ListGroup.Item>Sunday, June 21st, 8pm-11pm <Button className='calendar_button float-right' href='https://calendar.google.com/event?action=TEMPLATE&tmeid=Mmx0ZzRzMGtyMjluMjBhZmwxN282MXIyMmggZG9tYWxyMGhidHJrZnRibzFoNzI1YmoyY2NAZw&tmsrc=domalr0hbtrkftbo1h725bj2cc%40group.calendar.google.com' >
                Add to calendar
              </Button></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <h2>
              Where:
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
          <p>The Benjamin Franklin Parkway, at the Barnes Foundation, on the corner of 20th Street.</p>
          <iframe className='desktop' style={{ maxWidth: '100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.160945523261!2d-75.17528784905686!3d39.96015417931984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c634b159cf11%3A0x8e918cf2f2411980!2sBenjamin%20Franklin%20Pkwy%2C%20Philadelphia%2C%20PA%2019130!5e0!3m2!1sen!2sus!4v1591896908524!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{ border: '0px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <Button className='mobile' target="_blank" href="https://goo.gl/maps/1w4TeM6CK9qo9Z4d8">View on Map</Button>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
          <h2>
            Share:
          </h2>
          </Col>
        </Row>
        <Row className='text-center b-2'>
          <Col>
            <FacebookShareButton style={{ margin: '5px'}} url={'https://epic-edison-27c463.netlify.app/'}><FacebookIcon size={'3em'} round={true}/></FacebookShareButton>
            <TwitterShareButton style={{ margin: '5px'}} url={'https://epic-edison-27c463.netlify.app/'}><TwitterIcon size={'3em'} round={true}/></TwitterShareButton>
            <EmailShareButton style={{ margin: '5px'}}  url={'https://epic-edison-27c463.netlify.app/'}><EmailIcon size={'3em'} round={true}/></EmailShareButton>
          </Col>
        </Row>
        <Row>
          <Col className='text-center mt-4'>
            <p style={{ fontSize: '.6em'}}>This installation has been supported by the People’s Emergency Center, the Barnes Foundation, WorldStage, the Mantua Civic Association, and Nine Hostage Arts</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
