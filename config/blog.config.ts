import latex from './latex.config'

const blog = {
  showReadingTime: false,
  blogTitle: 'Sunghyun Cho',
  blogDescription: 'I am Sunghyun Cho, traveling the WWW.',
  postsPerPage: 'ALL',
  blogSidebarCount: 'ALL',
  blogSidebarTitle: 'Flagship Posts',
  routeBasePath: '/w',
  remarkPlugins: [latex.math],
  rehypePlugins: [latex.katex],
  authorsMapPath: 'authors.yml',
  editUrl: ({ locale, blogDirPath, blogPath }) => {
    return `https://github.com/anaclumos/extracranial/tree/main/posts/${blogPath.replace(
      '/index.md',
      ''
    )}/${locale}.md`
  },
}

export default blog
