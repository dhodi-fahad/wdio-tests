import HomePage from "../../pages/home.page.js";


describe ("Home Page", () => {
    before(async () => {
        await HomePage.open();
    })
    it("should display the title", async () => {

        await expect(HomePage.welcomeTitle).toHaveText("Welcome to Formy")
    })

})