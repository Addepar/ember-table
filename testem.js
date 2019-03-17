module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: process.env.TESTEM_LAUNCH ? process.env.TESTEM_LAUNCH.split(',') : ['Chrome'],
  launch_in_dev: ['Chrome'],
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.TRAVIS ? '--no-sandbox' : null,

        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=0',
        '--window-size=1440,900',
      ].filter(Boolean),
    },
    Firefox: {
      mode: 'ci',
      args: [
        '--headless',
        '--window-size=1440,900',
      ],
    }
  },
};
