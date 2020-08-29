module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: {
      HOME:"https://intercon-git-dev.gabtan99.now.sh/",
      SERVICES:"https://intercon-git-dev.gabtan99.now.sh/services",
      TARGETS:"https://intercon-git-dev.gabtan99.now.sh/targets",
      BLOG:"https://intercon-git-dev.gabtan99.now.sh/blog",
      ABOUT:"https://intercon-git-dev.gabtan99.now.sh/about",
      CONTACT:"https://intercon-git-dev.gabtan99.now.sh/contact"
    },
    WIDTH:{
      MOBILE_S: 320,
      MOBILE_M: 375,
      MOBILE_L: 425,
      TABLET: 768,
      LAPTOP: 1024,
      LAPTOP_L: 1440,
      FOURK: 2560,
    },
    HEIGHT: 2000,
  },
  testMatch: [
    "**/tests/**/*.test.js"
  ],
  verbose: true
}