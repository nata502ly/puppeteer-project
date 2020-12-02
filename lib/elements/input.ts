import {BaseElement} from './element'

class Input extends BaseElement {
    constructor({page, selector}: {page:any, selector: string}) {
        super({page, selector});
    }
}

export {
    Input
}


