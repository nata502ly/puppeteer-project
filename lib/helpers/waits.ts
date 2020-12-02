const waits = {
     waitForVisible: async (ctx, timeout) => {
        const {page, selector} = ctx;
        await page.waitForSelector(selector, {visible: true}, timeout)
    }
};

export {
    waits
}
