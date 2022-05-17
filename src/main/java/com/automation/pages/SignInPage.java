package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement textAuthentication;

    @CacheLookup
    @FindBy(xpath = "//button[@name='SubmitLogin']")
    WebElement signInBtn;

    @CacheLookup
    @FindBy(xpath = "//button[@name='SubmitCreate']")
    WebElement createAccountBtn;

    @CacheLookup
    @FindBy(id = "email")
    WebElement emailField;

    @CacheLookup
    @FindBy(id = "passwd")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger']//ol")
    WebElement errorMessage;

    @CacheLookup
    @FindBy(id = "email_create")
    WebElement emailFieldCreateAccount;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutButton;

    public String authenticationMessage() {
        String message = getTextFromElement(textAuthentication);
        log.info("Authentication Text" + textAuthentication.toString());
        return message;
    }

    public void clickObSignInBtn() {
        clickOnElement(signInBtn);
        log.info("Click on signin button" + signInBtn.toString());
    }

    public void clickOnCreateAccountBtn() {
        clickOnElement(createAccountBtn);
        log.info("Click on create account" + createAccountBtn.toString());
    }

    public void enterEmail(String email) {
        sendTextToElement(emailField, email);
        log.info("Enter email" + emailField.toString());
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Enter password" + passwordField.toString());
    }

    public String getErrorMessage(String errormessage) {
        String message = getTextFromElement(errorMessage);
        log.info("Get error Message" + errorMessage.toString());
        return message;
    }

    public void enterEmailToCreateAccount(String emailaccount) {
        sendTextToElement(emailFieldCreateAccount, emailaccount);
    }

    public void clickOnSignOutBtn() {
        clickOnElement(signOutButton);
    }


}
