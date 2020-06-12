import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Image } from 'react-bootstrap'

import Damon from '../images/gallery/Damon.jpg'
import Erik from '../images/gallery/Erik.jpg'

import DamonUncropped from '../images/gallery/Damon_uncrop.jpg'
import ErikUncropped from '../images/gallery/Erik_uncrop.jpg'

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" />
    <Container style={{ maxWidth: '650px', lineHeight: '1.6'}}>
      <Row>
        <Col className='mt-3'>
          <h1 style={{ fontFamily: 'Alfa Slab One', fontWeight: '400' }}>Gallery</h1>
        </Col>
      </Row>
      <Row>
        <Col className='col-sm'>
          <Image src={Damon}></Image>
        </Col>
        <Col className='col-sm my-auto'>
          <p className='align-middle'>"To me, fatherhood is an everlasting imprint on people who are part of you and knowingly giving them a role model. It's one of the simple pleasures of life."</p>
          <footer class="blockquote-footer">Damon</footer>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
        <p className='align-middle'>"My son doesn't have to follow in my footsteps, my job to make sure he is equipped with the legacy, standards and traditions that he can carry with him on whatever path he chooses."</p>
          <footer class="blockquote-footer">Erik</footer>
        </Col>
        <Col>
          <Image src={Erik}></Image>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={DamonUncropped}></Image>
        </Col>
        <Col>
          <Image src={ErikUncropped}></Image>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default GalleryPage

// export const query = graphql`
//   query {
//     file(relativePath: { eq:"gallery/Damon.jpg" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
//   `
