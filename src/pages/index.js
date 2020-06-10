import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col className='mt-3 text-center'>
            <h1 style={{ fontSize: '8vmin', fontFamily: 'Alfa Slab One'}}>From the Root to the Fruit</h1>
            <p>subtitle placeholder</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <Image/>
          <p><em>example rendering</em></p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-4'>
          <h2>
            What:
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>
            Additional Info:
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <div style={{ color: 'white', padding: '20px', backgroundColor: '#1F1300', borderRadius: '4px'}}>
            <h4>embed google calendar event here?</h4>
          </div>
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
