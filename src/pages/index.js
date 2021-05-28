import * as React from "react"
import Layout from "../components/layout"
import "@fontsource/quattrocento-sans"
import { Helmet } from 'react-helmet'
import Seo from "../components/seo"

const TITLE = "Hannah Guo";

const IndexPage = () => (
  <>
  <Seo title={"Hannah Guo's Website"} description={`Personal/Portfolio Website for Hannah Guo, Software Engineer`} />
  <Helmet> <title>{ TITLE }</title> </Helmet>
  <Layout></Layout>
  </>
)

export default IndexPage
