import React, { useState } from "react"
import { Card, Container, Row, Col, Image } from 'react-bootstrap'

import Layout from "../components/layout"
import standAgainst from '../images/standAgainst.jpeg'
import wokeToVote from '../images/flyer_woke_to_vote.jpeg'
import SEO from "../components/seo"
import './index.css'

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
              <h2 style={{ fontSize: '8vmin', fontWeight: '800', fontFamily: 'helvetica'}}>WeEmbraceFatherhood</h2>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <h3>Mission statement:</h3>
            <p>
We Embrace Fatherhood is a collective committed to the intentional transformation of families. We use public art, events, and an insistence on accountability as the catalyst for ongoing conversations about fostering strong male engagement in our communities. We turn these conversations into action, offering mentorship that guides fathers of all stripes to stand up and stand out. 
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
