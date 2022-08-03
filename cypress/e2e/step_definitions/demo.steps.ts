import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import DemoPage from '../pages/demo.page';

Given('I visit the page with path {string} & all code is in the stepdef file', async (path: string) => {
    cy.visit(path);
    cy.get('#sbtc input').click();
});

Given('I visit the page with path {string} & one method is in the page file but await used', async (path: string) => {
    cy.visit(path);
    await DemoPage.clickOnSearchField();
});

Given('I visit the page with path {string} & both methods are in page file but await not used', async (path: string) => {
    DemoPage.visit(path);
    DemoPage.clickOnSearchField();
});

Given('I visit the page with path {string} & both methods are in page file but used await', async (path: string) => {
    await DemoPage.visit(path);
    await DemoPage.clickOnSearchField();//It seems the second method throws exception when the await keyword is used
});