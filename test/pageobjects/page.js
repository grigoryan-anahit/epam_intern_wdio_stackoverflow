
module.exports = class Page {

    open () {
        return browser.url(`https://stackoverflow.com/`)
    }
}
