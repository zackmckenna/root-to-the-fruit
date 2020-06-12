import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Image } from 'react-bootstrap'
import Ken from '../images/Ken_about.jpg'

import {
  FacebookIcon,
  TwitterIcon
} from 'react-share'

const supportersList = [
  {
    name: 'The Barnes Foundation',
    link: "https://www.barnesfoundation.org/"
  },
  {
    name: "People's Emergency Center",
    link: "https://www.pec-cares.org/"
  },
  {
    name: "Mantua Civic Association",
    link: "https://mantuacivicassociation.wordpress.com/about/"
  },
  {
    name: "WorldStage",
    link: "https://www.worldstage.com/"
  },
  {
    name: "Shakespeare in Clark Park",
    link: "http://www.shakespeareinclarkpark.org/"
  },
  {
    name: "Nine Hostage Arts",
    link: "https://ninehostagearts.com/"
  },
  {
    name: "Opera Philadelphia",
    link: "https://www.operaphila.org/"
  }
]

const SupportersPage = () => (
  <Layout>
    <SEO title="About" />
    <Container style={{ maxWidth: '650px', lineHeight: '1.6'}}>
      <Row>
        <Col className='mt-3'>
          <h1 style={{ fontFamily: 'Alfa Slab One', fontWeight: '400' }}>Supporters</h1>
          <p>A huge thanks to our sponsors below for their support:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><a target="_blank" href="https://www.barnesfoundation.org/">The Barnes Foundation</a></h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><a target="_blank" href="https://www.pec-cares.org/">People's Emergency Center</a></h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><a target="_blank" href="https://mantuacivicassociation.wordpress.com/about/">Mantua Civic Association</a></h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><a target="_blank" href="https://www.worldstage.com/">WorldStage</a></h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><a target="_blank" href="http://www.shakespeareinclarkpark.org/">Shakespeare in Clark Park</a></h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><a target="_blank" href="https://ninehostagearts.com/">Nine Hostage Arts</a></h4>
        </Col>
      </Row>
      <Row>
        <Col >
          <h4><a target="_blank" href="https://www.operaphila.org/">Opera Philadelphia</a></h4>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <h4>Other facilitators of this installation include:</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Derrick Pratt, De'Wayne Drummond, Dante Leonard, Robert Kaplowitz and Jeff Sugg. </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SupportersPage
