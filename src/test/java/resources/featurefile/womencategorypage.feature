Feature: Women category page functions

  As a User I like to check functions of women category page

  Scenario: verifyUserShouldNavigateToWomenCategoryPageSuccessfyully
    Given I am on homepage
    When I click on women link tab
    Then I should redirect to women category page and verify text women

  Scenario Outline: verifyUserShouldAddProductToTheCartSuccessfully(String product, String qty, String size, String colour)
    Given  I am on homepage
    And I click on women link tab
    And I Click on the product "<product>"
    And I Change quantity "<qty>"
    And I Select size "<size>"
    And I Select colour "<colour>"
    And I Click on Add To Cart Button
    And I Verify the message "Product successfully added to your shopping cart"
    And I Click on X button and close the popup

    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |