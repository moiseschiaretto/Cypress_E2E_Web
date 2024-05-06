/// <reference types="Cypress" />

import { Elements_C002_EnterInsurantData } from '../elements/Elements_C002_EnterInsurantData'

class GuiaEnterInsurantData {
    // Guia Enter Insurant Data
    
    // Acessar o frame Enter Insurant Data igual a sete campos
    acessarOFrameEnterInsurantDataIgualASeteCampos() {
        // Aguardar os campos da Guia Enter Insurant Data serem exibidos
        // cy.wait(3000);

        // Clicar na Guia Enter Insurant Data
        cy.get('#enterinsurantdata').click()
        // Validar a quantidade de campos obrigatórios a serem preenchidos
        cy.xpath('//*[@id=\"enterinsurantdata\"]//span[@class = \"counter\"]').should('contain', '7')
    }

    // Permitir preencher ou selecionar os dados dos campos do seguro
    permitirPreencherOuSelecionarOsDadosDosCamposDoSeguro() {
        // Campo First Name
        cy.get('#firstname').click()
        cy.get('#firstname').clear()
        cy.get('#firstname').type('Moises')
        cy.get('#firstname').should('have.value', 'Moises')

         // Campo Last Name
         cy.get('#lastname').click()
         cy.get('#lastname').clear()
         cy.get('#lastname').type('Chiaretto')
         cy.get('#lastname').should('have.value', 'Chiaretto')
         
        // Campo Date of Birth
        cy.get('#birthdate').click()
        cy.get('#birthdate').clear()
        cy.get('#birthdate').type('05/15/1990')
        cy.get('#birthdate').should('have.value', '05/15/1990')

        // Radio Button Gender
        cy.xpath('/html/body/div[1]/div/div[1]/div/div/form/div/section[2]/div[4]/p/label[1]/span')
            .click()
            //.should('have.value', 'Yes')
            //.should('be.enabled')
            //.should('be.true')
            //.should('be.checked')
            //.should('equal', 'Yes')
            //.should('equal', '1')

       // Campo Street Address
       cy.get('#streetaddress').click()
       cy.get('#streetaddress').clear()
       cy.get('#streetaddress').type('Rua X')
       cy.get('#streetaddress').should('have.value', 'Rua X')
       
       // Combobox Country
       cy.get('#country')
       .select('Brazil')
       .should('have.value', 'Brazil')
       
        // Campo Zip Code
        cy.get('#zipcode').click()
        cy.get('#zipcode').clear()
        cy.get('#zipcode').type('123456')
        cy.get('#zipcode').should('have.value', '123456')

        // Campo City
        cy.get('#city').click()
        cy.get('#city').clear()
        cy.get('#city').type('Curitiba')
        cy.get('#city').should('have.value', 'Curitiba')

        // Combobox Occupation
       cy.get('#occupation')
       .select('Employee')
       .should('have.value', 'Employee')

       // Flag Button Gender
       cy.xpath('/html/body/div[1]/div/div[1]/div/div/form/div/section[2]/div[10]/p/label[5]')
       .click()
       //.should('have.value', 'Yes')
       //.should('be.enabled')
       //.should('be.true')
       //.should('be.checked')
       //.should('equal', 'Yes')
       //.should('equal', '1')
        
        // Campo Website
        cy.get('#website').click()
        cy.get('#website').clear()
        cy.get('#website').type('https://www.google.com')
        cy.get('#website').should('have.value', 'https://www.google.com')

        /*
        // Upload do Arquivo / Picture
        cy.get('#picture').click()
        cy.get('#picture').clear()
        cy.get('#open').click().attachFile('cypress\support\resources\picture.fusca.jpg')
        cy.wait(2000)
        */
    }

    // Clicar o frame Enter Insurant Data igual a zero campo
    clicarOFrameEnterInsurantDataIgualAZeroCampos() {
        // Clicar na Guia Enter Insurant Data
        cy.get('#enterinsurantdata').click()
        // Validar a quantidade de campos obrigatórios preenchidos
        cy.xpath('//*[@id=\"enterinsurantdata\"]//span[@class = \"counter zero\"]', '0')
    }

    // Clicar no botao Next para o sistema redirecionar para o frame Enter Produt Data
    clicarNoBotaoNextParaOSistemaRedirecionarParaOFrameEnterProdutData(){
        // Clicar na Guia Enter Product Data
        cy.get('#enterproductdata').click()
        // Validar a quantidade de campos obrigatórios a serem preenchidos
        cy.xpath('//*[@id=\"enterproductdata\"]//span[@class = \"counter\"]', '6')
    }
}
export default GuiaEnterInsurantData;
