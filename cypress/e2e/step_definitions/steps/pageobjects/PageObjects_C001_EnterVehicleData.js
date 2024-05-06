/// <reference types="Cypress" />

import { Elements_C001_EnterVehicleData } from '../elements/Elements_C001_EnterVehicleData'
const url = "http://sampleapp.tricentis.com/101/app.php"
import 'cypress-xpath'

class GuiaEnterVehicleData {
    // Acessa a url informada
    acessarGuiaEnterVehicleData() {
        // Limpar os Cookies do Browser da execução anterior
        cy.clearCookies()
        // Acessar a URL
        cy.visit(url)
        // Validar a Página Acessada - Título da Página
        cy.get(Elements_C001_EnterVehicleData.tituloDaPagina).should('contain', Elements_C001_EnterVehicleData.textoTituloDaPagina)
        // Clicar na Guia Enter Vehicle Data
        cy.get(Elements_C001_EnterVehicleData.guiaEnterVehicleData).click()
        // Validar a quantidade de campos obrigatórios a serem preenchidos
        cy.xpath(Elements_C001_EnterVehicleData.qtdeCamposGuiaEnterVehicleData).should('contain', '12')
    }

    // Preencher a primeira Guia "Enter Vehicle Data"
    preencherOuSelecionarCampos() {
        // *** Popular os Campos da Guia Enter Vehicle Data *** //
        
        // Combobox Make
        cy.get('#make')
        .select('Volkswagen')
        .should('have.value', 'Volkswagen')

        // Combobox Model
        cy.get('#model')
        .select('Scooter')
        .should('have.value', 'Scooter')

        // Campo Cylinder Capacity [ccm]
        cy.get('#cylindercapacity').click()
        cy.get('#cylindercapacity').clear()
        cy.get('#cylindercapacity').type('500')
        cy.get('#cylindercapacity').should('have.value', '500')

        // Campo Engine Performance [kW]
        cy.get('#engineperformance').click()
        cy.get('#engineperformance').clear()
        cy.get('#engineperformance').type('2000')
        cy.get('#engineperformance').should('have.value', '2000')

        // Campo Date of Manufacture
        const dataAtual = new Date();
        const dataFormatada = `${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}/${dataAtual.getDate().toString().padStart(2, '0')}/${dataAtual.getFullYear()}`;
        cy.get('#dateofmanufacture').click()
        cy.get('#dateofmanufacture').clear()
        cy.get('#dateofmanufacture').type(dataFormatada)
        cy.get('#dateofmanufacture').should('have.value', dataFormatada)

        // Combobox Number of Seats
        cy.get('#numberofseats')
        .select('7')
        .should('have.value', '7')
        
        // Radio Button Right Hand Drive
        cy.xpath('/html/body/div[1]/div/div[1]/div/div/form/div/section[1]/div[7]/p/label[1]/span')
          .click()
          //.should('have.focus')
          
            
            //.should('have.attr', 'be.checked')
            //.should('have.value', 'Yes')
            //.should('have.attr', 'Yes')
            //.should('be.enabled')
            //.should('be.true')
            //.should('be.checked')
            //.should('be.selected')
            //.should('equal', 'Yes')
            //.should('equal', '1')
        /*
        cy.contains('.ideal-radiocheck-label', 'Yes')
            .prev()
            .should('have.attr', 'type', 'radio')
            .should('be.checked')
        */

        // Combobox Number of Seats
        cy.get('#numberofseatsmotorcycle')
        .select('2')
        .should('have.value', '2')
        
        // Combobox Fuel Type
        cy.get('#fuel')
        .select('Gas')
        .should('have.value', 'Gas')

        // Campo Payload [kg]
        cy.get('#payload').click()
        cy.get('#payload').clear()
        cy.get('#payload').type('1000')
        cy.get('#payload').should('have.value', '1000')

        // Campo Total Weight [kg]
        cy.get('#totalweight').click()
        cy.get('#totalweight').clear()
        cy.get('#totalweight').type('50000')
        cy.get('#totalweight').should('have.value', '50000')
        
        // Campo List Price [$]
        cy.get('#listprice').click()
        cy.get('#listprice').clear()
        cy.get('#listprice').type('100000')
        cy.get('#listprice').should('have.value', '100000')

        // Campo License Plate Number
        cy.get('#licenseplatenumber').click()
        cy.get('#licenseplatenumber').clear()
        cy.get('#licenseplatenumber').type('100000')
        cy.get('#licenseplatenumber').should('have.value', '100000')

        // Campo Annual Mileage [mi]
        cy.get('#annualmileage').click()
        cy.get('#annualmileage').clear()
        cy.get('#annualmileage').type('100000')
        cy.get('#annualmileage').should('have.value', '100000')
    }

    // Validar a Qtde de Campos Preenchidos na Guia Enter Vehicle Data
    validarQtdeCamposPreenchidos(){
        // Clicar na Guia Enter Vehicle Data
        cy.xpath('//*[@id="entervehicledata"]').click()
        // Validar a quantidade de campos obrigatórios preenchidos
        cy.xpath('//*[@id=\"entervehicledata\"]//span[@class = \"counter zero\"]').should('contain', '0')

    }

    // Clicar no botao Next para o sistema redirecionar para o frame Enter Insurant Data
    clicarNoBotaoNextParaOSistemaRedirecionarParaOFrameEnterInsurantData() {
        
        // Clicar na Guia Enter Insurant Data
        cy.get('#enterinsurantdata').click()
        // Validar a quantidade de campos obrigatórios a serem preenchidos
        cy.xpath('//*[@id=\"enterinsurantdata\"]//span[@class = \"counter\"]').should('contain', '7')
    
    }
    
}
export default GuiaEnterVehicleData;
