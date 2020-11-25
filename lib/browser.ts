import * as puppeteer from "puppeteer"
import {Page, Browser} from "puppeteer";
import {pubsub, messagesList} from './pubsub';

const caps = {
    defaultViewport: {
        width: 1800,
        height: 800
    },
    headless: false
};

export class BrowserAdapter {
    private currentPage: Page;
    private browser: Browser;

    constructor() {
    }

    async initCurrentPage() {
         this.browser = await puppeteer.launch(caps);
         this.currentPage = await this.browser.newPage();

        pubsub.publish(messagesList.currentPage, this.currentPage);
    }

    async goto(url: string) {
        if (!this.currentPage) {
            await this.initCurrentPage();
        }
        await this.currentPage.goto(url);
    }

    async close() {
        await this.browser.close();

        pubsub.publish(messagesList.closeBrowser, this.currentPage);

    }

    async sleep(time = 1000) {
        await (() => new Promise(res => setTimeout(res, time)))();
    }
}

const browser = new BrowserAdapter();

export {browser};



