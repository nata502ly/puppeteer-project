import {messagesList, pubsub} from "../pubsub";
import {waits} from "../helpers"

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
        await waits.waitForVisible(this, 2500);
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

    async get() {
        if(!this.currentElement) {
            await this.initElement()
        }
        return this.currentElement.evaluate(node => node.innerText)
    }
}

function _$(selector:string) {
    return new BaseElement({selector})
}

export {
    _$,
    BaseElement
}

