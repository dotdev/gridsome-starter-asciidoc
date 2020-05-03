// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Asciidoc starter',
  siteUrl: 'https://gridsome-starter-asciidoc.netlify.app',
  siteDescription: 'a showcase website for the Gridsome Asciidoc transformer',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        // ignoring the _partials directory
        // note that the order is important and the ignore in this case should come last is otherwise files would get
        // included by the include rule anyways
        path: ['content/posts/**/*.adoc', '!content/posts/_partials/**/*'],
        typeName: 'Post',
        route: '/:title',
        // all converter options are documented on https://asciidoctor-docs.netlify.app/asciidoctor.js/processor/convert-options/
        asciidoc: {
          doctype: 'article',
        },
      },
    },
  ],
  transformers: {
    asciidoc: {
      // global asciidoc options
      attributes: {
        icons: 'font',
        imagesdir: '/assets/img',
        'allow-uri-read': true,
      },
      plugins: [
        'asciidoctor-chart',
        'asciidoctor-katex',
        'asciidoctor-kroki',
      ],
    },
  },
}
