@smoke
Feature: Demo

    Scenario: Works fine

        Given I visit the page with path 'images' & all code is in the stepdef file

    Scenario: Works fine

        Given I visit the page with path 'images' & one method is in the page file but await used

    Scenario: Works fine

        Given I visit the page with path 'images' & both methods are in page file but await not used    

    Scenario: Causes Error

        Given I visit the page with path 'images' & both methods are in page file but used await