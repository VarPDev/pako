import type { RequestHandler } from '@builder.io/qwik-city'
import { routes } from '@qwik-city-plan'
import { pagesSlugsApi } from '~/services/graph-ql.service'
import { createSitemap } from './create-sitemap'

export const onGet: RequestHandler = async ev => {
  const siteRoutes = routes
    .map(([route]) => route as string)
    .filter(route => route !== '/' && route !== 'finance/[slug]/') // Exclude the '/' route

  const token = ev.env.get('DATO_CMS_TOKEN')
  const allDevPages = await pagesSlugsApi(token ?? '', 'dev')
  const allFinancePages = await pagesSlugsApi(token ?? '', 'finance')

  const financeSlugs = allFinancePages.data.allPages.map(
    (item: any) => `finance/${item.slug}/`,
  )

  const devSlugs = allDevPages.data.allPages.map(
    (item: any) => `blog/${item.slug}/`,
  )
  siteRoutes.push(...financeSlugs, ...devSlugs)

  const sitemap = createSitemap([
    { loc: '/', priority: 1 }, // Manually include the root route
    ...siteRoutes.map(route => ({
      loc: route,
      priority: 0.9, // Default priority, adjust as needed
    })),
  ])

  const response = new Response(sitemap, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  })

  ev.send(response)
}
