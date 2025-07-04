import { BlogTypes } from '~/utils/helpers'

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

  const response = await fetch('https://graphql.datocms.com/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({ query: PAGE_QUERY }),
  })

  const responseBody = await response.json()
  return responseBody
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

  const response = await fetch('https://graphql.datocms.com/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({ query: LATEST_QUERY }),
  })

  const responseBody = await response.json()
  return responseBody
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

  const response = await fetch('https://graphql.datocms.com/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({ query: LATEST_QUERY }),
  })

  const responseBody = await response.json()
  return responseBody
}

export const pagesSlugsApi = async (token: string, blogType: string) => {
  const PAGES_QUERY = `{
        allPages(filter: { slug: { notIn: [${BlogTypes}] }, blogType: { eq: "${blogType}" } }) {
          slug
          blogType
        }
      }`

  const response = await fetch('https://graphql.datocms.com/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({ query: PAGES_QUERY }),
  })

  const responseBody = await response.json()
  return responseBody
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

  const response = await fetch('https://graphql.datocms.com/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({ query: COMMENTS_QUERY }),
  })

  const responseBody = await response.json()
  return responseBody
}
