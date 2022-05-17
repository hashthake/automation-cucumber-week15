Feature: Register page

  As a user I like to register

  Scenario: verifyThatUserShouldCreateAccountSuccessfully
    Given I am on homepage
    When I click on signin link
    And I enter email in ceateaccount
    And I click on createaccout button
    And I enter firstname
    And I enter lastname
    And I enter password
#    And I enter date of birth
    And I enter address
    And I enter cityname
    And I enter state
    And I enter zipcode
    And I enter phonenumber
    And I click on register button
    Then I should able to see signout link on display