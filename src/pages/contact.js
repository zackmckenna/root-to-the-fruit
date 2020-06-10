import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <Row>
        <Col className='text-center'>
          <h1 style={{ fontFamily: 'Alfa Slab One', fontWeight: '400' }}>Contact</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
