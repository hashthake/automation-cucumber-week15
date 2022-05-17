package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womenLogoLink;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLinkDisplay;

    public void clickOnSignInLink() {
        clickOnElement(signInLink);
        log.info("Click n Signin link" + signInLink.toString());
    }

    public void clickOnWomenLogo() {
        clickOnElement(womenLogoLink);
        log.info("Click on women logo link" + womenLogoLink.toString());
    }

    public void signOutLinkDisplay() {
        signOutLink.isDisplayed();
    }

    public void signInLinkOnDisplay() {
        signInLinkDisplay.isDisplayed();
    }

}
