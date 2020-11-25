import {messagesList, pubsub} from "./pubsub"

class BasePage {

    private selector: string;
    private name: string;
    private page: any;

    constructor(selector, name, page?: any) {
        this.selector = selector;
        this.name = name;
        this.page = page;
        pubsub.subscribe(messagesList.currentPage, this.initPage.bind(this))
    }

    get id() {
        return this.name
    }

    initPage(page) {
        this.page = page
    }
}

export {
    BasePage
}
