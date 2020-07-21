class Actions {
    static getSource() {
        return browser.getSource();
    }

    static getTitle() {
        return browser.getTitle();
    }

    static clickBackButton() {
        Actions.click(this.commonScreen.backButton);
    }

    static clearText(loc) {
        browser.elementClear(loc);
    }

    static sendKeys(loc, text) {
        const elementId = browser.findElement(loc, value.ELEMENT)
        browser.elementClick(loc);
        browser.elementSendKeys(loc, text);
    }

    static getElement(loc) {
        if (loc === undefined) {
            throw new Error('locator must be defined');
        }
        try {
            return browser.elementSendKeys(loc);
        } catch (err) {
            return null;
        }
    }

    static getText(loc) {
        return browser.getElementText(loc);
    }

    static getTagName(loc) {
        return browser.getElementTagName(loc);
    }

    static closeWindow() {
        browser.closeWindow();
    }

    static sleepBrowser(waittime) {
        browser.pause(waittime);
    }

    static click(loc) {
        try {
            browser.elementClick(loc);
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = Actions;
