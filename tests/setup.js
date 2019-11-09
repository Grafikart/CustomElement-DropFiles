require('expect-puppeteer')

global.expect.extend({
  async toExist (received, times = 1) {
    const elements = await global.page.$$(received)
    const pass = elements.length === times;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be present ${times} times on the page`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be present ${times} times on the page`,
        pass: false,
      };
    }
  },
});

global.it = async ( name, func ) => {
  return await test( name, async () => {
    try {
      await func();
    } catch ( error ) {
      if ( process.env.E2E_DEBUG ) {
        console.log( error );
        await jestPuppeteer.debug();
      }
      throw error;
    }
  }, process.env.E2E_DEBUG ? 60000 : null );
}
