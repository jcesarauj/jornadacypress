/// <reference types="cypress" />

const faker = require('faker-br');
const facker = require('faker-br')

describe('US002 - Deve fazer cadastro com sucesso', () => {

    beforeEach(() => 
     cy.visit("cadastrar")
    );

    it('Deve fazer login com sucesso', () => {

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type("Julio Cesar de Araujo")
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type("Projeto@Cypress")
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type("Projeto@Cypress")

        cy.get('[data-test="register-submit"]').click();

        cy.url().should('include','dashboard');
    });
});    