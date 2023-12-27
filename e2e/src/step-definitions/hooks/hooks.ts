import {BeforeAll, Before, AfterAll, After} from '@cucumber/cucumber';
const {chromium} = require('playwright');

BeforeAll(async () => {
    global.browser = await chromium.launch({
        headless:false
    });  
});

AfterAll(async() => {
    await global.browser.close();
});

Before(async () => {
    global.context = await global.browser.newContext();
    global.page = await global.browser.newPage();
});

After(async () => {
    await global.page.close();
    await global.context.close();   
});