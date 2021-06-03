import * as React from "react"
import Layout from "../components/layout"
import "@fontsource/quattrocento-sans"
import { Helmet } from 'react-helmet'
import Seo from "../components/seo"
import ImageSEO from "../images/pfp.jpg";

const TITLE = "Hannah Guo";

const IndexPage = () => (
  <>
  <span data-nosnippet>
    <Seo title={"Hannah Guo's Website"} 
        description={`Personal/Portfolio Website for Hannah Guo, Software Engineer`} 
        image={ImageSEO}/>
    <Helmet> <title>{ TITLE }</title> </Helmet>
    <Layout></Layout>
  </span>
  </>
)

export default IndexPage
