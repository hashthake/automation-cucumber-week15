package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WomenCategoryPage extends Utility {

    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());

    public WomenCategoryPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h2[contains(text(),'Women')]")
    WebElement womentext;

    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/div[2]/ul[1]/li[1]/h5[1]/a[1]")
    WebElement tops;

    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/div[2]/ul[1]/li[2]/h5[1]/a[1]")
    WebElement dresses;

    @FindBy(xpath = "//select[@id='selectProductSort']")
    WebElement sortBy;

    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement enterqty;

    @FindBy(xpath = "//select[@id='group_1']")
    WebElement sendsize;

    @FindBy(xpath = "//span[contains(text(),'Add to cart')]")
    WebElement addtocart;

    @FindBy(xpath = "//body[1]/div[1]/div[1]/header[1]/div[3]/div[1]/div[1]/div[4]/div[1]/div[1]/h2[1]")
    WebElement successfullyadded;

    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[4]/div[1]/div[1]/span[1]")
    WebElement bTm;



    public String verifyWomenText() {
        log.info("verify Women Text : " + womentext.toString() + "<br>");
        return getTextFromElement(womentext);
    }

    public void clickTopsLink() {
        log.info("click Tops Link : " + tops.toString() + "<br>");
        clickOnElement(tops);
    }

    public void clickdressesLink() {
        log.info("click dresses Link : " + dresses.toString() + "<br>");
        clickOnElement(dresses);
    }

    public void selectSortBy(String text) {
        log.info("select SortBy : " + sortBy.toString() + "<br>");
        selectByVisibleTextFromDropDown(sortBy, text);
    }

    public void enterQty(String qty) {
        log.info("select SortBy : " + enterqty.toString() + "<br>");
        clearTextFromField(By.xpath("//input[@id='quantity_wanted']"));
        sendTextToElement(enterqty, qty);
    }

    public void enterSize(String size) {
        log.info("select SortBy : " + sortBy.toString() + "<br>");
        selectByVisibleTextFromDropDown(sendsize, size);
    }

    public void clickaddTocart() {
        log.info("select SortBy : " + addtocart.toString() + "<br>");
        clickOnElement(addtocart);
    }

    public String verifySuccessfullyAdded() {
        String message = getTextFromElement(successfullyadded);
        log.info("verify Successfully Added : " + successfullyadded.toString() + "<br>");
        return message;
    }

    public void clickXBtn() {
        log.info("click XBtn : " + bTm.toString() + "<br>");
        clickOnElement(bTm);
    }

    public void clickProduct(String product) {
        log.info("verify Successfully Added : " + product.toString() + "<br>");
        clickOnElement(By.partialLinkText(product));
    }

    public void selectColour(String colour) {
        log.info("verify Successfully Added : " + colour.toString() + "<br>");
        clickOnElement(By.name(colour));
    }
}
