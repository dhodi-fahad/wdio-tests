import HomePage from "../../pages/home.page.js";


describe ("Home Page", () => {
    before(async () => {
        await HomePage.open();
    })
    it("should display the title", async () => {

        await expect(HomePage.welcomeTitle).toHaveText("Welcome to Formy")
    })

    it("should display the subtitle", async () => {
        await expect(HomePage.welcomeSubtitle).toHaveText("This is a simple site that has form components that can be used for testing purposes.")
    })


})