/*
{
  metahead: {
    title: '...',
    charset: '...',
    metaTags: [
      { name: '...', content: '...' },
      ...
    ],
    links: [
      { rel: '...', type: '...', href: '...' },
      ...
    ]
  },
  data: { ... }
}
*/

module.exports = {
  index: {
    metahead: {
      title: 'Reactive Me - Learning and Development',
      charset: 'utf-8',
      metaTags: [
        { name: 'description', content: 'This is the place which communication!' }
      ],
      links: [
        { rel: "stylesheet", type:"text/css", href: "https://reactive.me/nunjucks/css/highlight.css" }
      ]
    },
    data: {
      list: [
        { name: 'New Content 1', link: 'https://reactive.me/new-post/react-native-map-setup' },
        { name: 'New Content 2', link: 'https://reactive.me/new-post/react-native-map-setup-2' }
      ]
    }
  },
  user: {
    metahead: {
      title: 'Reactive Me - Learning and Development',
      charset: 'utf-8',
      metaTags: [
        { name: 'description', content: 'User pages load information' }
      ],
      links: [
        { rel: "stylesheet", type:"text/css", href: "https://reactive.me/nunjucks/css/highlight.css" }
      ]
    },
    data: {
      list: [
        { name: 'New User 1', link: 'https://reactive.me/new-post/react-native-map-user-oauth' },
        { name: 'New User 2', link: 'https://reactive.me/new-post/react-native-map-user-oauth-2' }
      ]
    }
  }
}