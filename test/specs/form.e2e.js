import FormPage from "../../pages/form.page.js";
import {expect, $} from "@wdio/globals";


describe('Form Page', ()=>{
    before(async() =>{
        await FormPage.open();
    })
    it("should enter first name", async ()=>{
        await FormPage.inputFirstName.setValue("John");
    })

    it("should enter last name", async ()=>{
        await FormPage.inputLastName.setValue("Doe");
    })

    it("should enter Job Title", async ()=>{
        await FormPage.inputJobTitle.setValue("QA");
    })

    it("should select eduction level", async ()=>{
        await FormPage.radioInputEducationLevel[2].click()
    })

    it("should select gender", async ()=>{
        await FormPage.checkboxGender[0].click()
    })

    it("should select years of experience", async ()=>{
        await FormPage.selectYearsOfExperience[2].click()
    })

    it("should select date", async ()=>{
        await FormPage.inputDate.setValue("12/12/2022")
    })

    it("should click submit button", async ()=>{
        await FormPage.submitButton.click()
    })

    it("should see success message", async ()=>{
        expect($('h1')).toHaveText('Thanks for submitting the form')
        expect($('div[class$=\'alert-success\']')).toHaveText('The form was successfully submitted!')
    })
})