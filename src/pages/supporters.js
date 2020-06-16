import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Image } from 'react-bootstrap'
import mca from '../images/supporters/mca.png'
import pcRadio from '../images/supporters/pcRadio.jpeg'
import barnesLogo from '../images/supporters/barnesLogo.png'

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
          <h1 style={{ fontFamily: 'Alfa Slab One', fontWeight: '400' }}>Partners</h1>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col className='text-center my-auto' sm md={3}>
          <h4>We Embrace Fatherhood</h4>
        </Col>
        <Col sm md={4}>
          <a target="_blank" href="https://www.barnesfoundation.org/"><Image src={barnesLogo}></Image></a>
        </Col>
        <Col sm md={4}>
          <a target="_blank" href="https://mantuacivicassociation.wordpress.com/about/"><Image src={mca}></Image></a>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col sm sm={4}>
          <a target="_blank" href="http://pcradiolive.com/"><Image src={pcRadio}></Image></a>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <h1 style={{ fontFamily: 'Alfa Slab One', fontWeight: '400' }}>Supporters</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><a target="_blank" href="https://www.pec-cares.org/">People's Emergency Center</a></h4>
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
        <Col >
          <h4><a target="_blank" href="http://www.frontlinedads.org/">Front Line Dads</a></h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><a target="_blank" href="https://www.peopleslight.org/">Peoples Light and Theatre Company</a></h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>website by <a target="_blank" href="https://www.zackmckenna.com">zackmckenna</a></h5>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SupportersPage
