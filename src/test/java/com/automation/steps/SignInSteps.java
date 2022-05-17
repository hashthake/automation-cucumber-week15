package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class SignInSteps {
    @Then("^I should verify authentication message$")
    public void iShouldVerifyAuthenticationMessage() {
        new SignInPage().authenticationMessage();
    }

    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username) {
        new SignInPage().enterEmail(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new SignInPage().enterPassword(password);
    }

    @And("^I click on signin button$")
    public void iClickOnSigninButton() {
        new SignInPage().clickObSignInBtn();
    }

    @Then("^I verify error message \"([^\"]*)\"$")
    public void iVerifyErrorMessage(String message) {
        new SignInPage().getErrorMessage(message);

    }

    @And("^I verify that sign out link is displayed$")
    public void iVerifyThatSignOutLinkIsDisplayed() {
        new HomePage().signOutLinkDisplay();
    }

    @And("^I click on signout button$")
    public void iClickOnSignoutButton() {
        new SignInPage().clickOnSignOutBtn();
    }

    @Then("^I verify that signin link is displayed$")
    public void iVerifyThatSigninLinkIsDisplayed() {
        new HomePage().signInLinkOnDisplay();
    }
}
