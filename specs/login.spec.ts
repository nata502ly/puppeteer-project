import {browser} from "../lib";
import {MainPage} from "../framework/pages/main.page"

const mainPage = new MainPage();

describe('Main page', function(){

    beforeEach(async function () {
        await browser.goto('http://the-internet.herokuapp.com/login');
    });

    afterEach(async function () {
        await browser.close();
    });

    it("should login", async function() {
        await mainPage.loginToSystem('tomsmith', 'SuperSecretPassword!')
    })
});
