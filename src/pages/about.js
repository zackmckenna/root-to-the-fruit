import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Root to the Fruit About</h1>
    <Link to="/">home</Link> <br />
  </Layout>
)

export default AboutPage
