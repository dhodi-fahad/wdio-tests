import Page from "./page.js";


class HomePage extends Page {
    get welcomeTitle(){
        return $ ('h1[class="display-3"]')
    }

    open() {
        return super.open("");
    }
}

export default new HomePage();