import { BlogTypes } from '~/utils/helpers'

const DATO_CMS_ENDPOINT = 'https://graphql.datocms.com/'

/**
 * Runs a GraphQL query against DatoCMS and fails loudly on any problem,
 * so a build (SSG) breaks with the real cause instead of a later
 * "undefined is not iterable" on a missing `data` field.
 */
const datoQuery = async (token: string, query: string) => {
  if (!token) {
    throw new Error(
      'DatoCMS: DATO_CMS_TOKEN is empty. Set it in the environment used for the build (e.g. Vercel > Settings > Environment Variables).',
    )
  }

  const response = await fetch(DATO_CMS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ query }),
  })

  const rawBody = await response.text()
  let body: any
  try {
    body = JSON.parse(rawBody)
  } catch {
    throw new Error(
      `DatoCMS: non-JSON response (HTTP ${response.status}): ${rawBody.slice(0, 500)}`,
    )
  }

  if (!response.ok || body?.errors?.length || !body?.data) {
    const messages = Array.isArray(body?.errors)
      ? body.errors.map((e: any) => e?.message ?? JSON.stringify(e)).join('; ')
      : rawBody.slice(0, 500)
    throw new Error(
      `DatoCMS: request failed (HTTP ${response.status}): ${messages}`,
    )
  }

  return body
}

export const articleDetailApi = async (
  slug: string,
  blogType: string,
  token: string,
) => {
  const PAGE_QUERY = `{
    page (filter: { slug: { eq: "${slug}" }, blogType: { eq: "${blogType}" } }) {
      id
      title
      slug
      subtitle
      language
      cover {
        alt
        url
      }
      content {
        value
        blocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on  ImageBlockRecord{
            id
            asset {
              alt
              height
              width
              url
              title
              responsiveImage {
                src
                srcSet
                width
                height
                alt
                title
              }
            }
            __typename
          }
        }
        links {
          ... on RecordInterface {
            id
            __typename
          }
          ... on PageRecord {
            id
            slug
            blogType
            __typename
          }
        }
      }
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }`

  return datoQuery(token, PAGE_QUERY)
}

export const latestArticles = async (
  token: string,
  blogType: string,
  limit: number = 4,
) => {
  const LATEST_QUERY = `{
    allPages(first: ${limit}, filter: { slug: { notIn: [${BlogTypes}] }, blogType: { eq: "${blogType}" } }) {
      id
      title
      subtitle
      slug
      _firstPublishedAt
      language
      cover {
        alt
        url
      }
      _status
      _firstPublishedAt
    }
  }`

  return datoQuery(token, LATEST_QUERY)
}

export const listArticles = async (token: string, blogType: string) => {
  const LATEST_QUERY = `{
    allPages(filter: { slug: { notIn: [${BlogTypes}] }, blogType: { eq: "${blogType}" } }) {
      id
      title
      subtitle
      slug
      _firstPublishedAt
      language
      cover {
        alt
        url
      }
      _status
      _firstPublishedAt
    }
  }`

  return datoQuery(token, LATEST_QUERY)
}

export const pagesSlugsApi = async (token: string, blogType: string) => {
  const PAGES_QUERY = `{
        allPages(filter: { slug: { notIn: [${BlogTypes}] }, blogType: { eq: "${blogType}" } }) {
          slug
          blogType
        }
      }`

  return datoQuery(token, PAGES_QUERY)
}

export const commentsByPageSlugApi = async (token: string, pageId: string) => {
  const COMMENTS_QUERY = `{
    allComments (filter: {pageLink: {eq: "${pageId}"}}) {
      _createdAt
      _updatedAt
      id
      name
      message
      likes
      dislikes
      parentComment {
        id
      }
    }
  }`

  return datoQuery(token, COMMENTS_QUERY)
}
