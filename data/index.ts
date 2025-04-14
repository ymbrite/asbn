import { getCurrentInstance } from 'vue'

export const navbarData = () => {
  const { $i18n } = useNuxtApp()
  return {
    homeTitle: $i18n.t('homeTitle')
  }
}

export const footerData = () => {
  const { $i18n } = useNuxtApp()
  return {
    author: $i18n.t('author'),
    aboutAuthor:
      $i18n.t('aboutAuthor'),
    authorInterest: $i18n.t('authorInterest'),
    aboutTheSite:
      $i18n.t('aboutTheSite'),
  }
}

export const homePage = () => {
  const { $i18n } = useNuxtApp()
  return {
    title: $i18n.t('homePageTitle'),
    description:
      $i18n.t('homePageDescription'),
  }
}

export const blogsPage = () => {
  const { $i18n } = useNuxtApp()
  return {
    title: $i18n.t('blogsPageTitle'),
    description: $i18n.t('blogsPageDescription'),
  }
}

export const categoryPage = () => {
  const { $i18n } = useNuxtApp()
  return {
    title: $i18n.t('categoryPageTitle'),
    description:
      $i18n.t('categoryPageDescription')
  }
}

export const aboutPage = () => {
  const { $i18n } = useNuxtApp()
  return {
    title: $i18n.t('aboutPageTitle'),
    description: $i18n.t('aboutPageDescription'),
    aboutMe:
      $i18n.t('aboutPageAboutMe')
  }
}

export const seoData = () => {
  const internalInstance = getCurrentInstance()
  const nuxtApp = internalInstance?.appContext.app.$nuxt
  const i18n = nuxtApp?.$i18n
  return {
    title: i18n?.t('seoDataTitle'),
    ogTitle: i18n?.t('seoDataOgTitle'),
    description: i18n?.t('seoDataDescription'),
    twitterDescription: i18n?.t('seoDataTwitterDescription'),
    image:
      'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
    mySite: 'https://serajs-net.web.app',
    twitterHandle: '@abdullah',
    mailAddress: 'serajs.net@gmail.com',
  }
}

export const socialLinks = {
  githubLink: 'https://github.com/AbdullahSeraj',
  linkedinLink: 'https://www.linkedin.com/in/abdullah-seraj',
  twitterLink: 'https://twitter.com',
  stackoverflowLink: 'https://stackoverflow.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData().description,
  },
  { property: 'og:site_name', content: seoData().mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData().mySite,
  },
  {
    property: 'og:title',
    content: seoData().ogTitle,
  },
  {
    property: 'og:description',
    content: seoData().description,
  },
  {
    property: 'og:image',
    content: seoData().image,
  },
  { name: 'twitter:site', content: seoData().twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData().mySite,
  },
  {
    name: 'twitter:title',
    content: seoData().ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData().twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData().image,
  },
]
