import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Image } from 'react-bootstrap'
import Ken from '../images/Ken_about.jpg'

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
          <h1 style={{ fontFamily: 'Alfa Slab One', fontWeight: '400' }}>About the Artist</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={Ken} ></Image>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2><a style={{ color: 'black'}} href="https://www.kenmcfarlanephoto.com/">Ken McFarlane</a><span className='float-right'><a href='https://twitter.com/365ken'><TwitterIcon round={true} size={'30px'} /></a><a href='https://www.facebook.com/Ken-McFarlane-Photography-432087540877646/'><FacebookIcon round={true} size={'30px'}/></a>
</span></h2>
        </Col>
      </Row>
      <Row>
        <Col>

        </Col>
      </Row>
      <Row>
        <Col>
        <p>I am a West Philadelphia based documentary and portrait photographer focused on creating and presenting images and stories from the standpoint of Resident Observer, reflecting the local community as a member offering the outside world a view from within. My mission is to produce a documentary portrait of West Philadelphia - a record of our truth, our stories, our histories, our futures. Images that are both evidence and symbol of our existence in this space and time. I do not have the privilege of creating art for art’s sake.  For my community, I am an advocate for our presence, our resistance, our strength, our beauty, our right to thrive and our right to remain a community.
My most recent bodies of work have focused primarily on the production of visual manifestations and audio histories of Philadelphians as means of documentation for future generations.The intent of the work is to amplify the stories and images of the individual and community to preserve collective memory while encouraging future generations to realize, remember and re-examine the individual and collective image.</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <p>My mission is to produce a documentary portrait of West Philadelphia - a record of our truth, our stories, our histories, our futures. Images that are both evidence and symbol of our existence in this space and time. I do not have the privilege of creating art for art’s sake.  For my community, I am an advocate for our presence, our resistance, our strength, our beauty, our right to thrive and our right to remain a community.
My most recent bodies of work have focused primarily on the production of visual manifestations and audio histories of Philadelphians as means of documentation for future generations.The intent of the work is to amplify the stories and images of the individual and community to preserve collective memory while encouraging future generations to realize, remember and re-examine the individual and collective image.
</p>
        </Col>
      </Row>
      <Row className='mb-2'>
        <Col>
          Visit <a href="https://www.kenmcfarlanephoto.com/">Ken McFarlane Photography</a> for more examples of his work and contact information.
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
