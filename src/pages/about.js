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
        <Col className='mt-3'>
          <p>As a part of the Black Lives Matter movement for eradicating systematic racial injustice and in response to the COVID-19 crisis that is driving art out of public spaces, a small group of West Philadelphia fathers, activists and artists recently assembled on a mission to publicly celebrate Black Lives and Black Fatherhood.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>That coalition, now called We Embrace Fatherhood, in association with Mantua Civic Association, PC Radio Live and the Barnes Foundation will present a photography exhibit by Ken McFarlane celebrating Black Fatherhood entitled <strong>“From the Root to the Fruit, Portraits of Black Fathers and their Children” on the walls of the Barnes Foundation Saturday and Sunday, June 20th and 21st  from 8pm to 11pm. </strong> Music will provided by DJs from PC Radio Live, and opportunities for live testimony about embracing Black Fatherhood will be available to all who come to the event.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>This Art Activation is the second installation of West Philadelphia artist McFarlane’s ongoing photographic series of Black fathers with their children, where each image is accompanied by quotes about fatherhood drawn from interviews conducted with his subjects.  In the summer of ‘19, Traction artist Sedakial Gebremedhin curated the first phase, printing and installing 11 of Ken’s images on the boarded up windows of the Philadelphia Traction Trolley Company building on 41st and Haverford, with support from the People’s Emergency Center and Mural Arts.  That installation has been incredibly successful, however, it has also been almost exclusively experienced by the Mantua community.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>Led by community activists De’Wayne Drummond and Derrick Pratt Sr., a conversation arose about how to continue Ken’s series, both within Mantua (as the Traction building has been purchased by a developer) and as a citywide celebration of Black Fatherhood.  At this critical moment in our national confrontation with systematic racism, we feel that Father’s Day offers us an ideal context to confront the myth of absentee Black Fatherhood with these positive and deeply authentic portraits of our community.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>Our team resolved to project these images, in grand scale, on the exterior of a major public building in Philadelphia.  We selected the Barnes Foundation as an ideal location, for many reasons.  It sits at the center of the Ben Franklin Parkway, the heart of our city’s institutional (and largely White) arts establishments.  It has ideal physical features to handle projections. And the Foundation has a long history of connecting with the Black community, from Dr. Barnes’ original vision to their current Lola 38 programming and Head Start initiatives.  The Barnes has not only welcomed our vision, but has actively partnered with us to make this event happen.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>We Embrace Fatherhood is: Artist/Activst Ken McFarlane, De’Wayne Drummond (President of the Mantua Civic Association), Derrick Pratt (Founder of PC Radio Live), Dante Leonard (the Lancaster Corridor Manager for PEC), Robert Kaplowitz (Tony Award winning Sound Artist), and Jeff Sugg (Multi-Award winning Projections Designer).   The projectors are donated by WorldStage, financial and logistical support comes from People’s Emergency Center, and additional logistical support has been provided by Nine Hostage Arts, Shakespeare in Clark Park and Opera Philadelphia.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>We know that our country is crying out against structural racism. We have the power to shape our own collective image and our own authentic reality.  We can amplify our voice with images of strength, dignity, pride and success to drown out the cacophony of negative imagery surrounding the black body. Come embrace fatherhood with us.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
