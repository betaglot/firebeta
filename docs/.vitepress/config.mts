import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/firebeta/',
  cleanUrls: true,
  lang: 'en-US',
  title: 'Firebeta',
  description: '',
  lastUpdated: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ["link", { rel: "apple-touch-icon", href: "/Betaglot_Logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/Betaglot_Logo.png" }]
  ],
  themeConfig: {

    outline: [2, 4],
    logo: 'Betaglot_Logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/betaglot/firebeta' }
    ],
    footer: {
      message: "Library released under <a style='text-decoration:underline;' href='https://github.com/betaglot/firebeta/blob/main/LICENSE'>MIT License</a>.",
      copyright: `Copyright © 2024–${new Date().getUTCFullYear()} Christopher Duncan`
    },
    search: {
      provider: 'local'
    },

    siteTitle: 'FireBeta',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/tutorial/': sidebarTutorial(),
      '/reference/': sidebarReference(),
      '/dev/': sidebarDevelopment(),
    }
  }
})


function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/WhatFireBeta',
      activeMatch: '/guide/'
    },
    {
      text: 'Examples',
      link: '/examples/ExamplesOverview',
      activeMatch: '/examples/'
    },
    {
      text: 'Tutorial',
      link: '/tutorial/TutorialOverview',
      activeMatch: '/tutorial/'
    },
    {
      text: 'Reference',
      link: '/reference/RefOverview',
      activeMatch: '/reference/'
    },
    {
      text: '🛠',
      link: 'dev/DevOverview',
      activeMatch: '/dev/'
    }
  ]
}

function sidebarDevelopment() {
  return [
    { text: '<strong>Dev Overview</strong>', link: '/dev/DevOverview' },
    { text: '<strong>RawNotes</strong>', link: '/dev/RawNotes' },
  ]
}

function sidebarExamples() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/reference/RefOverview' },
  ]
}

function sidebarTutorial() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/reference/RefOverview' },
  ]
}

function sidebarGuide() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/reference/RefOverview' },
  ]
}

function sidebarReference() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/reference/RefOverview' },
    {
      text: ' 🔷<beta>Beta</beta> ', collapsed: true, link: '/reference/Beta/BetaOverview', items: [
        { text: '', link: '' }
      ],
    },
    {
      text: ' 🟠<moto>Moto</moto> ', collapsed: true, link: '/reference/Moto/MotoOverview', items: [
        { text: '', link: '' }
      ],
    },
    {
      text: ' 🟩<eco>Eco</eco> ', collapsed: true, link: '/reference/Eco/EcoOverview', items: [
        { text: '', link: '' }
      ],
    },
    {
      text: ' 🔻<via>Via</via> ', collapsed: true, link: '/reference/Via/ViaOverview', items: [
        { text: '', link: '' }
      ],
    },
    {
      text: ' 💜<neuro>Neuro</neuro>', collapsed: true, link: '/reference/Neuro/NeuroOverview', items: [
        { text: '', link: '' }
      ],
    },

  ]
}