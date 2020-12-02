import {BaseElement} from './element'

class Button extends BaseElement {
    constructor({page, selector}: {page:any, selector: string}) {
        super({page, selector});
    }

    async sendKeys(value) {
        throw Error('Button can not fill any value')
    }
}

export {
    Button
}


