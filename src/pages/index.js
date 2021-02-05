import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allDatoCmsArticle } = useStaticQuery(graphql`
    query SiteTitleQuery {
      allDatoCmsArticle {
        nodes {
          content
          duration
          id
          locale
          meta {
            createdAt
            firstPublishedAt
            updatedAt
            status
            publishedAt
            isValid
          }
          model {
            id
          }
          title
          testField
        }
      }
    }
  `)

  console.log(allDatoCmsArticle)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Articles ({allDatoCmsArticle.nodes.length})</h1>
      <div className="articles">
        {allDatoCmsArticle.nodes.map(article => (
          <article key={article.id}>
            <h2>{article.title}</h2>
            <div>Duration: {article.duration}</div>
            <div>Test field: {article.testField}</div>
            <p>{article.content}</p>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
