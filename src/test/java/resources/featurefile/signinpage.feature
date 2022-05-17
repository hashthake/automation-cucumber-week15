Feature: signin page test

  As a user I like to check sign in page

  Scenario: userShouldNavigateToSignInPageSuccessfully
    Given I am on homepage
    When I click on signin link
    Then I should verify authentication message

  Scenario Outline: verifyTheErrorMessageWithInValidCredentials
    Given I am on homepage
    When I click on signin link
    And I enter username "<username>"
    And I enter password "<password>"
    And I click on signin button
    Then I verify error message "<message>"

    Examples:
      | username       | password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  Scenario Outline: verifyThatUserShouldLogInSuccessFullyWithValidCredentials().

    Given I am on homepage
    When I click on signin link
    And I enter username "<username>"
    And I enter password "<password>"
    And I click on signin button
    And I verify that sign out link is displayed
    Examples:
      | username             | password |
      | carl.barby@gmail.com | ABCD123  |

  Scenario Outline: verifyThatUserShouldLogOutSuccessFully
    Given I am on homepage
    When I click on signin link
    And I enter username "<username>"
    And I enter password "<password>"
    And I click on signin button
    And I click on signout button
    Then I verify that signin link is displayed
    Examples:
      | username             | password |
      | carl.barby@gmail.com | ABCD123  |
