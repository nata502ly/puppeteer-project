import {BasePage} from "../../lib";
import { Text} from '../../lib'

class TablePage extends BasePage{
    private headerTitle: Text;

    constructor() {
        super('#flash-messages', 'Main page');
        this.headerTitle = this.initChild(Text, '.flash.success');
    }

    async getHeaderTitle() {
        return this.headerTitle.get()

    }

}

export {
    TablePage
}
