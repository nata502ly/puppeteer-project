import {BaseElement} from './element'

class Text extends BaseElement {
    constructor({page, selector}: {page:any, selector: string}) {
        super({page, selector});
    }
}

export {
    Text
}


