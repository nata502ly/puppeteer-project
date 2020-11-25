import {messagesList, pubsub} from "./pubsub";

class BaseElement {
        private page: any;
        private selector: string;
        private currentElement: any;

    constructor({page, selector}: {page?: any, selector: string}) {
        this.page = page;
        this.selector = selector;

        pubsub.subscribe(messagesList.currentPage, this.initPage.bind(this))
    }

    initPage(page) {
        this.page = page
    }

    private async initElement() {
        this.currentElement = await this.page.$(this.selector)

    }

    async sendKeys(value: string) {
        if(!this.currentElement) {
            await this.initElement()
        }
        await this.currentElement.type(value)
    }

    async click() {
        if(!this.currentElement) {
            await this.initElement()
        }
        await this.currentElement.click()
    }
}

function _$(selector:string) {
    return new BaseElement({selector})
}

export {
    _$,
    BaseElement
}

