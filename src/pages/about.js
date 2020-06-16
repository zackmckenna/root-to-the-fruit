import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Image } from 'react-bootstrap'

import {
  FacebookIcon,
  TwitterIcon
} from 'react-share'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container style={{ maxWidth: '650px', lineHeight: '1.6'}}>
      <Row>
        <Col className='mt-3'>
          <h1 style={{ fontFamily: 'Alfa Slab One', fontWeight: '400' }}>About</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>From the Root to the Fruit: Portraits of Black Fathers and their Children</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>A public art installation by Ken McFarlane Projected on the façade of the Barnes Foundation</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>June 20 & 21, 8-11pm</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <a rel="noreferrer" href="https://www.barnesfoundation.org/whats-on/free/ken-mcfarlane-installation#">View the Barnes Event</a>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>Philadelphia PA, June 16, 2020: As a part of the Black Lives Matter movement for eradicating systematic racial injustice and in response to the COVID-19 health crisis which has dramatically decreased public access to the arts, We Embrace Fatherhood, a coalition of West Philadelphia fathers, activists and artists, formed with a mission to publicly celebrate Black Lives and Black Fatherhood.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>On Saturday, June 20 and Sunday, June 21, from 8-11pm, We Embrace Fatherhood, in association with Mantua Civic Association, PC Radio Live and the Barnes Foundation will present an outdoor public art installation by Ken McFarlane celebrating Black Fatherhood entitled “From the Root to the Fruit: Portraits of Black Fathers and Their Children.” The installation will be projected onto the facade of the Barnes, viewable from their South East plaza as well as from the streets.  Music will provided by DJs from PC Radio Live. This will be a COVID-19-safe environment; six foot spacing is to be maintained, and attendees must wear masks at all times.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>This presentation is the second installation of West Philadelphia artist McFarlane’s ongoing photography series featuring Black fathers with their children. Each image is accompanied by quotes about fatherhood drawn from interviews conducted with his subjects.  In the summer of 2019, Traction artist Sedakial Gebremedhin curated the first installation of 11 of McFarlane’s images on the boarded up windows of the Philadelphia Traction Trolley Company building on 41st and Haverford, with support from the People’s Emergency Center and Mural Arts Philadelphia.  That installation has been incredibly successful, however, it has also been almost exclusively experienced by the Mantua community.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>Led by community activists De’Wayne Drummond and Derrick Pratt Sr., a conversation arose about how to continue Ken’s series, both within Mantua (as the Traction building has been purchased by a developer) and beyond.  At this critical moment in our national confrontation with systematic racism, we feel that Father’s Day offers us an ideal context to confront the myth of absentee Black Fatherhood by sharing these positive and deeply authentic portraits of our community on a citywide platform.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>Our team resolved to project Ken’s images, in grand scale, on the exterior of a major public building in Philadelphia.  We approached the Barnes Foundation as an ideal location for this event, given both its position at the center of the Benjamin Franklin Parkway, in the heart of our city’s cultural arts corridor, and the Barnes’s longstanding commitment to connecting with and supporting the Black community, from Dr. Barnes’s historical advocacy for African American Artists and scholars to its current @ Lola 38 programming in collaboration with the People’s Emergency Center and its participation in Head Start initiatives.  The Barnes has not only welcomed our vision, but has actively partnered with us to make this event happen.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>We know that our country is crying out against structural racism. We have the power to shape our own collective image and our own authentic reality.  We can amplify our voice with images of strength, dignity, pride and success to drown out the cacophony of negative imagery surrounding the black body. Come embrace fatherhood with us.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>We Embrace Fatherhood is: Artist/Activist Ken McFarlane, De’Wayne Drummond (President of the Mantua Civic Association), Derrick Pratt (Founder of PC Radio Live), Dante Leonard (the Lancaster Corridor Manager for PEC), Robert Kaplowitz (Tony Award winning Sound Artist), and Jeff Sugg (Multi-Award winning Projections Designer).</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>#WeEmbraceFatherhood</h3>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
