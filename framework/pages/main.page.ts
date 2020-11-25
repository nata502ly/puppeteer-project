import {BasePage, _$, BaseElement} from "../../lib"

const userNameSelector = 'input#username';
const passwordSelector = 'input#password';
const submitSelector = 'button[type="submit"]';

class MainPage extends BasePage{
    private userName: BaseElement;
    private password: BaseElement;
    private submit: BaseElement;

    constructor() {
        super('#content', 'Main page');
        this.userName =  _$(userNameSelector);
        this.password =  _$(passwordSelector);
        this.submit =  _$(submitSelector);
    }

    async loginToSystem(username, password) {
        await this.userName.sendKeys(username);
        await this.password.sendKeys(password);
        await this.submit.click();

    }

}

export {
    MainPage
}
