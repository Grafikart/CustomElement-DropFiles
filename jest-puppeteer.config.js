module.exports = {
  launch: {
    devtools: true,
    headless: process.env.HEADLESS !== 'false',
  },
  // server: {
  //   command: 'npm run serve',
  //   port: 4444,
  //   usedPortAction: 'kill'
  // },
}
