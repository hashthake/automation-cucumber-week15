$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createaccount.feature");
formatter.feature({
  "line": 1,
  "name": "Register page",
  "description": "\r\nAs a user I like to register",
  "id": "register-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15267954301,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "register-page;verifythatusershouldcreateaccountsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email in ceateaccount",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on createaccout button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter lastname",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#    And I enter date of birth"
    }
  ],
  "line": 14,
  "name": "I enter address",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter cityname",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter state",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter zipcode",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter phonenumber",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should able to see signout link on display",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 96236101,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 10165293900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterEmailInCeateaccount()"
});
formatter.result({
  "duration": 90106600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnCreateaccoutButton()"
});
formatter.result({
  "duration": 71072900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterFirstname()"
});
formatter.result({
  "duration": 5610886800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterLastname()"
});
formatter.result({
  "duration": 76963200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterPassword()"
});
formatter.result({
  "duration": 91247400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterAddress()"
});
formatter.result({
  "duration": 86421700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterCityname()"
});
formatter.result({
  "duration": 47697001,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#invalid_selector_exception\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-598O4S4\u0027, ip: \u0027192.168.1.226\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3c9d967455258374e28921339ee6c4f0, findElement {using\u003did, value\u003d}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\hvtha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57304}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57304/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3c9d967455258374e28921339ee6c4f0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.automation.utility.Utility.sendTextToElement(Utility.java:74)\r\n\tat com.automation.pages.CreateAccountPage.enterCity(CreateAccountPage.java:92)\r\n\tat com.automation.steps.RegisterPageSteps.iEnterCityname(RegisterPageSteps.java:59)\r\n\tat ✽.And I enter cityname(createaccount.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterState()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterZipcode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterPhonenumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldAbleToSeeSignoutLinkOnDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1016229000,
  "status": "passed"
});
formatter.uri("signinpage.feature");
formatter.feature({
  "line": 1,
  "name": "signin page test",
  "description": "\r\nAs a user I like to check sign in page",
  "id": "signin-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7307643501,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "userShouldNavigateToSignInPageSuccessfully",
  "description": "",
  "id": "signin-page-test;usershouldnavigatetosigninpagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should verify authentication message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 5663933099,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldVerifyAuthenticationMessage()"
});
formatter.result({
  "duration": 33497700,
  "status": "passed"
});
formatter.after({
  "duration": 804865600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 19,
      "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 20,
      "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 21,
      "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 22,
      "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 23,
      "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6117889000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 7436271201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 60114500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 93322300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 5751774900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 24
    }
  ],
  "location": "SignInSteps.iVerifyErrorMessage(String)"
});
formatter.result({
  "duration": 31437001,
  "status": "passed"
});
formatter.after({
  "duration": 765866501,
  "status": "passed"
});
formatter.before({
  "duration": 6574189699,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25501,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 9479076600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 67458699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 68912699,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 3561631001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 24
    }
  ],
  "location": "SignInSteps.iVerifyErrorMessage(String)"
});
formatter.result({
  "duration": 42809599,
  "status": "passed"
});
formatter.after({
  "duration": 743727000,
  "status": "passed"
});
formatter.before({
  "duration": 4889573300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 40501,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 2852324800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 76332301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 79206900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 942589400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 24
    }
  ],
  "location": "SignInSteps.iVerifyErrorMessage(String)"
});
formatter.result({
  "duration": 37674300,
  "status": "passed"
});
formatter.after({
  "duration": 774058501,
  "status": "passed"
});
formatter.before({
  "duration": 4100260001,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signin-page-test;verifytheerrormessagewithinvalidcredentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36999,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 2685402699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 74355301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 99172601,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 3092031799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 24
    }
  ],
  "location": "SignInSteps.iVerifyErrorMessage(String)"
});
formatter.result({
  "duration": 29957100,
  "status": "passed"
});
formatter.after({
  "duration": 728749599,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "verifyThatUserShouldLogInSuccessFullyWithValidCredentials().",
  "description": "",
  "id": "signin-page-test;verifythatusershouldloginsuccessfullywithvalidcredentials().",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify that sign out link is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "signin-page-test;verifythatusershouldloginsuccessfullywithvalidcredentials().;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 34,
      "id": "signin-page-test;verifythatusershouldloginsuccessfullywithvalidcredentials().;;1"
    },
    {
      "cells": [
        "carl.barby@gmail.com",
        "ABCD123"
      ],
      "line": 35,
      "id": "signin-page-test;verifythatusershouldloginsuccessfullywithvalidcredentials().;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4442557399,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "verifyThatUserShouldLogInSuccessFullyWithValidCredentials().",
  "description": "",
  "id": "signin-page-test;verifythatusershouldloginsuccessfullywithvalidcredentials().;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter username \"carl.barby@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter password \"ABCD123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify that sign out link is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 1549307800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carl.barby@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 93607700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABCD123",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 81324200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 4853614001,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iVerifyThatSignOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 55854901,
  "status": "passed"
});
formatter.after({
  "duration": 745327400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "verifyThatUserShouldLogOutSuccessFully",
  "description": "",
  "id": "signin-page-test;verifythatusershouldlogoutsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on signout button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I verify that signin link is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "signin-page-test;verifythatusershouldlogoutsuccessfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 46,
      "id": "signin-page-test;verifythatusershouldlogoutsuccessfully;;1"
    },
    {
      "cells": [
        "carl.barby@gmail.com",
        "ABCD123"
      ],
      "line": 47,
      "id": "signin-page-test;verifythatusershouldlogoutsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6540915400,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "verifyThatUserShouldLogOutSuccessFully",
  "description": "",
  "id": "signin-page-test;verifythatusershouldlogoutsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter username \"carl.barby@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter password \"ABCD123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on signout button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I verify that signin link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22601,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 1739955000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carl.barby@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 92161400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABCD123",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 88199300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 7446687100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignoutButton()"
});
formatter.result({
  "duration": 7764220500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iVerifyThatSigninLinkIsDisplayed()"
});
formatter.result({
  "duration": 20049776900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Sign in\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-598O4S4\u0027, ip: \u0027192.168.1.226\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e713ad105a466045c9ddb22dd4c63dff, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Sign in\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\hvtha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57574}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57574/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e713ad105a466045c9ddb22dd4c63dff\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.automation.pages.HomePage.signInLinkOnDisplay(HomePage.java:50)\r\n\tat com.automation.steps.SignInSteps.iVerifyThatSigninLinkIsDisplayed(SignInSteps.java:48)\r\n\tat ✽.Then I verify that signin link is displayed(signinpage.feature:44)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 876993600,
  "status": "passed"
});
formatter.uri("womencategorypage.feature");
formatter.feature({
  "line": 1,
  "name": "Women category page functions",
  "description": "\r\nAs a User I like to check functions of women category page",
  "id": "women-category-page-functions",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10164216100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verifyUserShouldNavigateToWomenCategoryPageSuccessfyully",
  "description": "",
  "id": "women-category-page-functions;verifyusershouldnavigatetowomencategorypagesuccessfyully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should redirect to women category page and verify text women",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26399,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 10008559799,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iShouldRedirectToWomenCategoryPageAndVerifyTextWomen()"
});
formatter.result({
  "duration": 42164099,
  "error_message": "org.junit.ComparisonFailure: Women text not displayed expected:\u003cW[omen]\u003e but was:\u003cW[OMEN]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.steps.WomenPageSteps.iShouldRedirectToWomenCategoryPageAndVerifyTextWomen(WomenPageSteps.java:20)\r\n\tat ✽.Then I should redirect to women category page and verify text women(womencategorypage.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 962647500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully(String product, String qty, String size, String colour)",
  "description": "",
  "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women link tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on X button and close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 22,
      "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 23,
      "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 24,
      "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 25,
      "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 26,
      "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8786527199,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully(String product, String qty, String size, String colour)",
  "description": "",
  "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women link tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21900,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 4461366200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 24
    }
  ],
  "location": "WomenPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 6417922900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenPageSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 121810899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 20164132500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenPageSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 79457100,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 59082501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "WomenPageSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 35929100,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 5034882401,
  "status": "passed"
});
formatter.after({
  "duration": 825737600,
  "status": "passed"
});
formatter.before({
  "duration": 6318126300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully(String product, String qty, String size, String colour)",
  "description": "",
  "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women link tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15500,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 5523673799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 24
    }
  ],
  "location": "WomenPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 2008570300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenPageSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 120680999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 20142754599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenPageSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 67935499,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 77080701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "WomenPageSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 42890299,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 2287089100,
  "status": "passed"
});
formatter.after({
  "duration": 770975800,
  "status": "passed"
});
formatter.before({
  "duration": 3838422200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully(String product, String qty, String size, String colour)",
  "description": "",
  "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women link tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24399,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 8909203800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 24
    }
  ],
  "location": "WomenPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 6288998401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenPageSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 125154600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 20089626699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenPageSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 67609900,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 61864400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "WomenPageSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 53328600,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 1669975800,
  "status": "passed"
});
formatter.after({
  "duration": 752828500,
  "status": "passed"
});
formatter.before({
  "duration": 5876314900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully(String product, String qty, String size, String colour)",
  "description": "",
  "id": "women-category-page-functions;verifyusershouldaddproducttothecartsuccessfully(string-product,-string-qty,-string-size,-string-colour);;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women link tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on the product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25201,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 3001461001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 24
    }
  ],
  "location": "WomenPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 20093139400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"partial link text\",\"selector\":\"Printed Summer Dress with Price $28.98\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-598O4S4\u0027, ip: \u0027192.168.1.226\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [99ddf0da5ef0c1590fcfd5bf8ea12905, findElement {using\u003dpartial link text, value\u003dPrinted Summer Dress with Price $28.98}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\hvtha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57788}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57788/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 99ddf0da5ef0c1590fcfd5bf8ea12905\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:47)\r\n\tat com.automation.pages.WomenCategoryPage.clickProduct(WomenCategoryPage.java:97)\r\n\tat com.automation.steps.WomenPageSteps.iClickOnTheProduct(WomenPageSteps.java:25)\r\n\tat ✽.And I Click on the product \"Printed Summer Dress with Price $28.98\"(womencategorypage.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenPageSteps.iChangeQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenPageSteps.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenPageSteps.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "WomenPageSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 992698800,
  "status": "passed"
});
});