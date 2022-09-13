/// <reference types="cypress" />


describe('US001 - Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {

        cy.visit('login');

        cy.login("jcesarauj@gmail.com", "Jc@1tJc@1t");

        cy.url().should('include','dashboard');
        
    });
    
});