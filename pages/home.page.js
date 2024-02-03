import {$} from "@wdio/globals";
import Page from "./page.js";


class HomePage extends Page {
    open() {
        return super.open("");
    }

    get welcomeTitle(){
        return $ ('h1[class="display-3"]')
    }
    get welcomeSubtitle(){
        return $ ('p[class="lead"]')
    }

}

export default new HomePage();