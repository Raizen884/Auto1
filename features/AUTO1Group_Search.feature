# language: en
# encoding UTF-8
Feature: Search Test Case
  
  As a customer
  I want to filter the search by price descending and verify the car offers

  @chrome-same-session @TestRegistrationYear
  Scenario Outline: I can verify all cars by first registration
    Given I navigate to the search "https://www.autohero.com/de/search/"
    When I filter for first registration <yearFilter>
    Then I verify all cars are filtered by first registration <yearFilter>

    Examples: 
      | yearFilter |
      | "2015"     |

  @chrome-same-session @TestDescendingPrice
  Scenario Outline: I can verify all cars are sorted by price descending
    Given I navigate to the search "https://www.autohero.com/de/search/"
    When I sort cars by "Höchster Preis"
    Then I verify all cars are sorted by price descending

    Examples: 
      | yearFilter |
      | "2015"     |

  @chrome-same-session @TestDescendingRegistration
  Scenario Outline: I can verify all cars by first registration and all cars are sorted by price descending
    Given I navigate to the search "https://www.autohero.com/de/search/"
    When I filter for first registration <yearFilter>
    And I sort cars by "Höchster Preis"
    Then I verify all cars are filtered by first registration <yearFilter>
    And I verify all cars are sorted by price descending

    Examples: 
      | yearFilter |
      | "2015"     |
