import * as React from "react"
import {Layout} from "../components/layout"
import "@fontsource/quattrocento-sans"
import { Seo } from "../components/seo"
// import ImageSEO from "../images/pfp3.jpg"

const TITLE = "Hannah Guo"

const Head = () => (
  <>
    <Seo
      title={"Hannah Guo's Website"}
      description={`Personal/Portfolio Website for Hannah Guo, Software Engineer`}
      // image={ImageSEO}
    />
    <title>{TITLE}</title>
  </>
)

const IndexPage = () => (
  <>
    <span data-nosnippet>
      <Head />
      <Layout></Layout>
    </span>
  </>
)

export default IndexPage
