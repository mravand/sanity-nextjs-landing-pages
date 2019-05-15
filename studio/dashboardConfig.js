export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cdbecb9c9cbde7d3878acb6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5vb2wqmt',
                  apiId: '03d05a41-25c9-4d02-987c-4cd0ba7ccce5'
                },
                {
                  buildHookId: '5cdbecba57632592d8632395',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-h9ao8rtg',
                  apiId: '1d94cbf9-459e-4e18-8047-e1f85c4ec55d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mravand/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-h9ao8rtg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
