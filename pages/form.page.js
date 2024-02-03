import {$} from "@wdio/globals"
import Page from "./page.js";


class FormPage extends Page{
    open () {
        return super.open("form")
    }

    get formPageTitle () {
        return $('h1')
    }

    get inputFirstName () {
        return $('input[id="first-name"]')
    }
    get inputLastName () {
        return $('input[id="last-name"]')
    }

    get inputJobTitle () {
        return $('input[id="job-title"]')
    }

    get radioInputEducationLevel () {
        /**
         Three options 0 - high school, 1 - college, 2 - graduate
         * */
        return $$('input[type="radio"]')
    }

    get checkboxGender(){
        /**
         Three options 0 - male, 1 - female, 2 - other
         * */
        return $$( 'input[type="checkbox"]')
    }

    get selectYearsOfExperience () {
        /**
         Four options 1 - 0-1, 2 - 2-4, 3 - 5-9, 4 - 10+
         * */
        return $('select[id="select-menu"]').$$('option')
    }

    get inputDate(){
        return  $('input[id="datepicker"]')
    }

    get submitButton(){
        return $('a[class$=\'btn-primary\']')
    }
}

export default new FormPage()