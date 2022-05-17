package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {

    private static final Logger log = Logger.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(id = "customer_firstname")
    WebElement firstName;

    @CacheLookup
    @FindBy(id = "customer_lastname")
    WebElement lastName;

    @CacheLookup
    @FindBy(id = "passwd")
    WebElement passwordfield;

//    @CacheLookup
//    @FindBy(xpath = "//select[@id='days']")
//    WebElement days;
//
//    @CacheLookup
//    @FindBy(xpath = "//select[@id='months']")
//    WebElement months;
//
//    @CacheLookup
//    @FindBy(xpath = "//select[@id='years']")
//    WebElement years;

    @CacheLookup
    @FindBy(id = "address1")
    WebElement addressField;

    @CacheLookup
    @FindBy(id = "city")
    WebElement cityField;

    @CacheLookup
    @FindBy(id = "id_state")
    WebElement stateField;

    @CacheLookup
    @FindBy(id = "postcode")
    WebElement zipCodeField;

    @CacheLookup
    @FindBy(id = "phone_mobile")
    WebElement phoneNumberField;

    @CacheLookup
    @FindBy(id = "submitAccount")
    WebElement registerbtn;

    @CacheLookup
    @FindBy(xpath = "//a[@class='logout']")
    WebElement signoutlinkdisplay;

    public void enterFirstName(String name){
        sendTextToElement(firstName,name);
        log.info("Enter first Name" + firstName.toString());
    }
    public void enterLastName(String lastname){
        sendTextToElement(lastName,lastname);
        log.info("Enter last name" + lastname.toString());
    }
    public void enterPasword(String password){
        sendTextToElement(passwordfield,password);
        log.info("Enter password" + passwordfield.toString());
    }
//    public void selectDayMonthYear(String day, String month, String year){
//        selectByVisibleTextFromDropDown(days,day);
//        selectByVisibleTextFromDropDown(months,month);
//        selectByVisibleTextFromDropDown(years,year);
//        log.info("Select date of birth" + days.toString() + months.toString() + years.toString());
//    }
    public void enterAddress(String address){
        sendTextToElement(addressField,address);
        log.info("Enter address" + addressField.toString());
    }
    public void enterCity(String city){
        sendTextToElement(cityField,city);
        log.info("Enter city name" + cityField.toString());
    }
    public void enterState(String state){
        sendTextToElement(stateField,state);
        log.info("Enter state" + stateField.toString());
    }
    public void enterZipCode(String zipcode){
        sendTextToElement(zipCodeField,zipcode);
        log.info("Enter zipcode" + zipCodeField.toString());
    }
    public void enterPhoneNumber(String phonenumber){
        sendTextToElement(phoneNumberField,phonenumber);
        log.info("Enter phone number" + phoneNumberField.toString());
    }
    public void clickRegisterBtn(){
        clickOnElement(registerbtn);
        log.info("Click on register btn" + registerbtn.toString());
    }
    public void signoutLinkOnDisplay(){
        signoutlinkdisplay.isDisplayed();
        log.info("Verify signout link on display" + signoutlinkdisplay.toString());
    }

}
