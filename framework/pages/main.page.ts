import {BasePage, BaseElement} from "../../lib";
import {Input, Button} from '../../lib'

class MainPage extends BasePage{
    private userName: BaseElement;
    private password: BaseElement;
    private submit: BaseElement;

    constructor() {
        super('#content', 'Main page');
        this.userName = this.initChild(Input, 'input#username');
        this.password = this.initChild(Input, 'input#password');
        this.submit = this.initChild(Button, 'button[type="submit"]')
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
