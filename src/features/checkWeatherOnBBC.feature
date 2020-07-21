Feature: Homepage launch

  Scenario: TC_001 Launch web page and open website
    Given I am on the homepage
    When I click on weather tab on the homepage
    Then I should be able to view summary for the day

