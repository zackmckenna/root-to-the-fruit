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
        </Col>
      </Row>
      <Row>
        <Col>
          <h3><a href="https://www.barnesfoundation.org/">The Barnes Foundation</a></h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3><a href="https://www.pec-cares.org/">People's Emergency Center</a></h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3><a href="https://mantuacivicassociation.wordpress.com/about/">Mantua Civic Association</a></h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3><a href="https://www.worldstage.com/">WorldStage</a></h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3><a href="http://www.shakespeareinclarkpark.org/">Shakespeare in Clark Park</a></h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3><a href="https://ninehostagearts.com/">Nine Hostage Arts</a></h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3><a href="https://www.operaphila.org/">Opera Philadelphia</a></h3>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SupportersPage
