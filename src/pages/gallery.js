import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Image } from 'react-bootstrap'

import Damon from '../images/gallery/Damon.jpg'
import Erik from '../images/gallery/Erik.jpg'
import JeanJacques from '../images/gallery/JeanJacques.jpg'
import Marco from '../images/gallery/Marco.jpg'
import Ken from '../images/gallery/Ken.jpg'
import Rob from '../images/gallery/Rob.jpg'
import Ogbonna from '../images/gallery/Ogbonna.jpg'
import Terrance from '../images/gallery/Terrance.jpg'
import FatherOnBike from '../images/gallery/FatherOnBike.jpg'

import DamonUncropped from '../images/gallery/Damon_uncrop.jpg'
import ErikUncropped from '../images/gallery/Erik_uncrop.jpg'

const mobileGallery = () => {
  return (
    <>
      <Row>
        <Col>
          <Image src={Damon}></Image>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='align-middle'>"To me, fatherhood is an everlasting imprint on people who are part of you and knowingly giving them a role model. It's one of the simple pleasures of life."</p>
          <footer class="mb-3 text-right blockquote-footer">Damon</footer>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Image src={Erik}></Image>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
        <p className='align-middle'>"My son doesn't have to follow in my footsteps, my job to make sure he is equipped with the legacy, standards and traditions that he can carry with him on whatever path he chooses."</p>
          <footer class="mb-3 text-right blockquote-footer">Erik</footer>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Image src={JeanJacques}></Image>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
        <p className='align-middle'>"I think of my role as a father as that of support to my two daughters being brilliant, beautiful, strong, and resilient. I can't support them without listening to them, without learning from them, learning to soften rough edges, while staying stable enough for them to lean on, and lift off from."</p>
          <footer class="mb-3 text-right blockquote-footer">Jean-Jacques</footer>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Image src={Ken}></Image>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
          <p className='align-middle'>"Pan-Africanism is my way of life. I have taught my son that regardless of the branch Africa is the root. We had a wonderful #blackpanthermovie weekend. I'm hoping he will see past the moment and embrace the movement."</p>
          <footer class="mb-3 text-right blockquote-footer">Ken</footer>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Image src={Rob}></Image>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
          <p className='align-middle'>"What being a father means to me: To me it's simple... My job is to make sure my children represent the best of me. Using my knowledge to protect them from pitfalls and to magnify the positives of life."</p>
          <footer class="mb-3 text-right blockquote-footer">Rob</footer>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Image src={Ogbonna}></Image>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
          <p className='align-middle'>"The most important investment to make is to spend time with your children."</p>
          <footer class="mb-3 text-right blockquote-footer">Ogbonna</footer>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Image src={Terrance}></Image>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
          <p className='align-middle'>"I want my daughter to see nature as a reflection of herself. So as she moves through this world she can better navigate the adversities of this life by recognizing the patterns and what comes next sunrise to sunset, season to season and all the cycles of the moon. That's natural."</p>
          <footer class="mb-3 text-right blockquote-footer">Terrance</footer>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Image src={FatherOnBike}></Image>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
          <p className='align-middle'>"It doesn't matter how we get there as long as we get there together.</p>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Image src={Marco}></Image>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
          <p className='align-middle'>"Marco and his daughter Tatiana were returning home from the bodega when I saw them. I was running late to pick up my son Marcus from after school care but there was something about the simultanouse strength and tenderness in which he held his child in hand that spoke to me and forced me to stop. I parked my car with haste and rallied back around the corner calling out "Family! Family!" to them even though we had never met before. Marco turned around with the cautious suspicion of a protective father and sized me up as I asked to photograph them.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>I watched him fixing his lips to say no after all I wasn't armed with a stack of business cards or a fancy camera, I just had my iPhone and my word. Before the no could pas his teeth I said "Look fam, to hear them tell it you would think are no Black fathers in the inner city. It's like to them we don't exist. They would have you believe that we're imaginary beings like unicors, but from I leave my house until I come back in I see fat her's with theird children just like I see you now." MArco weighted my words on the scale of his mind and looked down at Tatiana and held her that much tighter as he agreed to let me make this photograph."</p>
          <footer class="mb-3 text-right blockquote-footer">Ken McFarlane</footer>
        </Col>
      </Row>
    </>
  )
}

const desktopGallery = () => {
  return (
    <>
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
          <Image src={JeanJacques}></Image>
        </Col>
        <Col className='my-auto'>
        <p className='align-middle'>"I think of my role as a father as that of support to my two daughters being brilliant, beautiful, strong, and resilient. I can't support them without listening to them, without learning from them, learning to soften rough edges, while staying stable enough for them to lean on, and lift off from."</p>
          <footer class="blockquote-footer">Jean-Jacques</footer>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
          <p className='align-middle'>"I want my daughter to see nature as a reflection of herself. So as she moves through this world she can better navigate the adversities of this life by recognizing the patterns and what comes next sunrise to sunset, season to season and all the cycles of the moon. That's natural."</p>
          <footer class="blockquote-footer">Terrance</footer>
        </Col>
        <Col>
          <Image src={Terrance}></Image>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={Ken}></Image>
        </Col>
        <Col className='my-auto'>
          <p className='align-middle'>"Pan-Africanism is my way of life. I have taught my son that regardless of the branch Africa is the root. We had a wonderful #blackpanthermovie weekend. I'm hoping he will see past the moment and embrace the movement."</p>
          <footer class="blockquote-footer">Ken</footer>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
          <p className='align-middle'>"What being a father means to me: To me it's simple... My job is to make sure my children represent the best of me. Using my knowledge to protect them from pitfalls and to magnify the positives of life."</p>
          <footer class="blockquote-footer">Rob</footer>
        </Col>
        <Col>
          <Image src={Rob}></Image>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={Ogbonna}></Image>
        </Col>
        <Col className='my-auto'>
          <p className='align-middle'>"The most important investment to make is to spend time with your children."</p>
          <footer class="blockquote-footer">Ogbonna</footer>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
          <p className='align-middle'>"It doesn't matter how we get there as long as we get there together.</p>
        </Col>
        <Col>
          <Image src={FatherOnBike}></Image>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={Marco}></Image>
        </Col>
        <Col className='my-auto'>
        <p className='align-middle'>"Marco and his daughter Tatiana were returning home from the bodega when I saw them. I was running late to pick up my son Marcus from after school care but there was something about the simultanouse strength and tenderness in which he held his child in hand that spoke to me and forced me to stop. I parked my car with haste and rallied back around the corner calling out "Family! Family!" to them even though we had never met before. Marco turned around with the cautious suspicion of a protective father</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>and sized me up as I asked to photograph them. I watched him fixing his lips to say no after all I wasn't armed with a stack of business cards or a fancy camera, I just had my iPhone and my word. Before the no could pas his teeth I said "Look fam, to hear them tell it you would think are no Black fathers in the inner city. It's like to them we don't exist. They would have you believe that we're imaginary beings like unicors, but from I leave my house until I come back in I see fat her's with theird children just like I see you now." MArco weighted my words on the scale of his mind and looked down at Tatiana and held her that much tighter as he agreed to let me make this photograph."  <footer class="mt-2 blockquote-footer">Ken McFarlane</footer></p>
        </Col>
      </Row>
    </>
  )
}

const uncroppedGallery = () => {
  return (
    <>
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
    </>
  )
}

const GalleryPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Gallery" />
      <Container style={{ maxWidth: '650px', lineHeight: '1.6'}}>
        <Row>
          <Col className='mt-3'>
            <h1 style={{ fontFamily: 'Alfa Slab One', fontWeight: '400' }}>Gallery</h1>
          </Col>
        </Row>
        {desktopGallery()}
      </Container>
    </Layout>
  )
}

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
