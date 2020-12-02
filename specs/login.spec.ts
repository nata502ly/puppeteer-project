import {browser} from "../lib";
import {MainPage, TablePage} from "../framework/pages";
import {expect} from 'chai'

const mainPage = new MainPage();
const tablePage = new TablePage();


describe('Main page', function(){

    beforeEach(async function () {
        await browser.goto('http://the-internet.herokuapp.com/login');
    });

    afterEach(async function () {
        await browser.close();
    });

    it("should login", async function() {
        await mainPage.loginToSystem('tomsmith', 'SuperSecretPassword!');
        expect(await tablePage.getHeaderTitle()).to.contain('You logged into a secure area!')
    })
});
