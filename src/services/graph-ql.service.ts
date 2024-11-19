export const articleDetailApi = async (slug: string, token: string) => {
  const STORY_QUERY = `{
    page (filter: { slug: { eq: "${slug}" } }) {
      title
      slug
      subtitle
      content {
        value
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
    body: JSON.stringify({ query: STORY_QUERY }),
  })

  const responseBody = await response.json()
  return responseBody
}

export const latestAsrticles = async (token: string) => {
  const LATEST_QUERY = `{
    allPages(first: 8, filter: { slug: { neq: "finance" } }) {
      id
      title
      slug
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

export const pagesSlugsApi = async (token: string) => {
  const PAGES_QUERY = `{
        allPages(filter: { slug: { neq: "finance" } }) {
          slug
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
