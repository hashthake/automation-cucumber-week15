package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterPageSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click on signin link$")
    public void iClickOnSigninLink() {
        new HomePage().clickOnSignInLink();
    }

    @And("^I enter email in ceateaccount$")
    public void iEnterEmailInCeateaccount() {
        new SignInPage().enterEmailToCreateAccount("carl.barby1@gmail.com");
    }

    @And("^I click on createaccout button$")
    public void iClickOnCreateaccoutButton() {
        new SignInPage().clickOnCreateAccountBtn();
    }

    @And("^I enter firstname$")
    public void iEnterFirstname() {
        new CreateAccountPage().enterFirstName("Carl");
    }

    @And("^I enter lastname$")
    public void iEnterLastname() {
        new CreateAccountPage().enterLastName("Barby");
    }

    @And("^I enter password$")
    public void iEnterPassword() {
        new CreateAccountPage().enterPasword("ABCD123");
    }

//    @And("^I enter date of birth$")
//    public void iEnterDateOfBirth() {
//        new CreateAccountPage().selectDayMonthYear("8","March","1982");
//    }

    @And("^I enter address$")
    public void iEnterAddress() {
        new CreateAccountPage().enterAddress("20 Carl street");
    }

    @And("^I enter cityname$")
    public void iEnterCityname() {
        new CreateAccountPage().enterCity("bahamas");
    }

    @And("^I enter state$")
    public void iEnterState() {
        new CreateAccountPage().enterState("Alaska");
    }

    @And("^I enter zipcode$")
    public void iEnterZipcode() {
        new CreateAccountPage().enterZipCode("65436");
    }

    @And("^I enter phonenumber$")
    public void iEnterPhonenumber() {
        new CreateAccountPage().enterPhoneNumber("9876543211");

    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickRegisterBtn();
    }

    @Then("^I should able to see signout link on display$")
    public void iShouldAbleToSeeSignoutLinkOnDisplay() {
        new CreateAccountPage().signoutLinkOnDisplay();
    }
}
