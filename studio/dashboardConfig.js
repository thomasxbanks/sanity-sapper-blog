export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5de132be1738f6e00cb9c3a7',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-izfi1f23',
                  apiId: 'f049cf3d-1d17-477d-95c1-0a23a9acbc02'
                },
                {
                  buildHookId: '5de132bff878182fb2610ab6',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-u38q7b92',
                  apiId: '540d623c-761e-47bb-a7b9-50e410eb71f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomasxbanks/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-u38q7b92.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
