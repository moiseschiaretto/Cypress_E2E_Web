/* global Given, Then, When */
import {Given, When, Then, And, But} from "cypress-cucumber-preprocessor/steps"
import GuiaEnterProductData from '../pageobjects/PageObjects_C003_EnterProductData'
const guiaEnterProductData = new GuiaEnterProductData

// Guia Enter Product Data
Given(/^acessar o frame Enter Product Data igual a seis campos$/, () => {
	guiaEnterProductData.acessarOFrameEnterProductDataIgualASeisCampos();
});

When(/^preencher ou selecionar os dados dos campos do produto$/, () => {
	guiaEnterProductData.preencherOuSelecionarOsDadosDosCamposDoProduto();
});

And(/^clicar o frame Enter Product Data igual a zero campos$/, () => {
	guiaEnterProductData.clicarOFrameEnterProductDataIgualAZeroCampos();
});

Then(/^clicar no botao Next para o sistema redirecionar para o frame Select Price Option$/, () => {
	guiaEnterProductData.clicarNoBotaoNextParaOSistemaRedirecionarParaOFrameSelectPriceOption();
});
