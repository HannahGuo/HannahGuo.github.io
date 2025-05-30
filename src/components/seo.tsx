/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

interface SeoProps {
	title?: string
	description?: string
	pathname?: string
	children?: React.ReactNode
}

export const Seo: React.FC<SeoProps> = ({
	title,
	description,
	pathname,
	children,
}) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
		twitterUsername,
	} = useSiteMetadata()

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image}`,
		url: `${siteUrl}${pathname || ``}`,
		twitterUsername,
	}

	return (
		<>
			<title>{seo.title}</title>
			<meta
				name="description"
				content={seo.description}
			/>
			<meta
				name="image"
				content={seo.image}
			/>
			<meta
				name="twitter:card"
				content="summary_large_image"
			/>
			<meta
				name="twitter:title"
				content={seo.title}
			/>
			<meta
				name="twitter:url"
				content={seo.url}
			/>
			<meta
				name="twitter:description"
				content={seo.description}
			/>
			<meta
				name="twitter:image"
				content={seo.image}
			/>
			{children}
		</>
	)
}
