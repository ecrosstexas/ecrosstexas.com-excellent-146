module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'ecrosstexas.com',
  siteDescription:
    'The personal website of Eric Wallace, a digital rancher in Plano, Texas.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Eric Wallace', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'ecrosstexas@gmail.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://ecrosstexas.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '@ecrosstexas', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'My great Web Development Blog',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'ecrosstexas',
    street: '13375 Branch View Ln',
    city: 'Dallas',
    state: 'TX',
    zip: '75234',
    mobileDisplay: '+34 1234567',
    mobileCall: ' +341234567',
    email: 'ecrosstexas@gmail.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
