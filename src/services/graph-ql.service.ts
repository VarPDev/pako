export const articleDetailApi = async (slug: string, token: string) => {
  const STORY_QUERY = `{
    page (filter: { slug: { eq: "${slug}" } }) {
      title
      slug
      content {
        value
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
