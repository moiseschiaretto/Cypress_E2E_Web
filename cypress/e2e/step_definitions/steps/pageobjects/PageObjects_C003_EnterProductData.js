/// <reference types="Cypress" />

import { Elements_C003_EnterProductData } from '../elements/Elements_C003_EnterProductData'

class GuiaEnterProductData {
    // Guia Enter Product Data
    
    // Acessar o frame Enter Product Data igual a seis campo 
    acessarOFrameEnterProductDataIgualASeisCampos(){
        // Clicar na Guia Enter Product Data
        cy.get('#enterproductdata').click()
        // Validar a quantidade de campos obrigatórios a serem preenchidos
        cy.xpath('//*[@id=\"enterproductdata\"]//span[@class = \"counter\"]').should('contain', '6')
    }

    // Preencher ou selecionar os dados dos campos do produto
    preencherOuSelecionarOsDadosDosCamposDoProduto(){

        // Campo Start Date
        cy.get('#startdate').click()
        cy.get('#startdate').clear()
        cy.get('#startdate').type('12/31/2024')
        cy.get('#startdate').should('have.value', '12/31/2024')

        // Combobox Insurance Sum [$]
        cy.get('#insurancesum')
        .select('3.000.000,00')
        .should('have.value', '3000000')

        // Combobox Merit Rating
        cy.get('#meritrating')
        .select('Bonus 3')
        .should('have.value', 'Bonus 3')

        // Combobox Damage Insurance
        cy.get('#damageinsurance')
        .select('Partial Coverage')
        .should('have.value', 'Partial Coverage')
        
       // Flag Optional Products
       cy.xpath('/html/body/div[1]/div/div[1]/div/div/form/div/section[3]/div[5]/p/label[2]/span')
       .click()
       //.should('have.value', 'Yes')
       //.should('be.enabled')
       //.should('be.true')
       //.should('be.checked')
       //.should('equal', 'Yes')
       //.should('equal', '1')

        // Combobox Courtesy Car
        cy.get('#courtesycar')
        .select('Yes')
        .should('have.value', 'Yes')
    }
        
    // Clicar o frame Enter Product Data igual a zero campo
    clicarOFrameEnterProductDataIgualAZeroCampos(){
        // Clicar na Guia Enter Product Data
        cy.get('#enterproductdata').click()
        // Validar a quantidade de campos obrigatórios preenchidos
        cy.xpath('//*[@id=\"enterproductdata\"]//span[@class = \"counter zero\"]', '0')
    }

    // Clicar no botao Next para o sistema redirecionar para o frame Select Price Option
    clicarNoBotaoNextParaOSistemaRedirecionarParaOFrameSelectPriceOption(){
        // Clicar na Select Price Option
        cy.get('#selectpriceoption').click()
        // Validar a quantidade de campos obrigatórios a serem preenchidos
        cy.xpath('//*[@id=\"selectpriceoption\"]//span[@class = \"counter\"]', '1')
    }
}
export default GuiaEnterProductData;
