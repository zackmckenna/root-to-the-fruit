import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col className='mt-3 text-center'>
            <h5  className='mb-0' style={{ fontFamily: 'Alfa Slab One'}} >From the</h5>
            <h1 style={{ fontSize: '10vmin', fontFamily: 'Alfa Slab One'}}>Root to the Fruit</h1>
            <p>subtitle placeholder</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image/>
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

export default IndexPage
