import i18n = require('./config/i18n.config')
import docs = require('./config/docs.config')
import blog = require('./config/blog.config')
import theme = require('./config/theme.config')
import katexStylesheet = require('./config/katex.stylesheet')
import navbar = require('./config/navbar.config')
import footer = require('./config/footer.config')

import type { Config } from '@docusaurus/types'

const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const config: Config = {
  title: 'cho.sh',
  tagline: 'I am Sunghyun Cho, traveling the www.',
  url: 'https://cho.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'anaclumos',
  projectName: 'www',
  i18n: i18n,
  presets: [
    [
      'classic',
      {
        docs: docs,
        blog: blog,
        theme: theme,
      },
    ],
  ],
  stylesheets: [katexStylesheet],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: navbar,
    footer: footer,
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
  },
}

export = config
