/* global Given, Then, When */
import {Given, When, Then, And, But} from "cypress-cucumber-preprocessor/steps"
import GuiaEnterInsurantData from '../pageobjects/PageObjects_C002_EnterInsurantData'
const guiaEnterInsurantData = new GuiaEnterInsurantData

// Guia Enter Insurant Data
Given(/^acessar o frame Enter Insurant Data igual a sete campos$/, () => {
	guiaEnterInsurantData.acessarOFrameEnterInsurantDataIgualASeteCampos();
});

When(/^permitir preencher ou selecionar os dados dos campos do seguro$/, () => {
	guiaEnterInsurantData.permitirPreencherOuSelecionarOsDadosDosCamposDoSeguro();
});

Then(/^clicar o frame Enter Insurant Data igual a zero campos$/, () => {
	guiaEnterInsurantData.clicarOFrameEnterInsurantDataIgualAZeroCampos();
});

And(/^clicar no botao Next para o sistema redirecionar para o frame Enter Produt Data$/, () => {
	guiaEnterInsurantData.clicarNoBotaoNextParaOSistemaRedirecionarParaOFrameEnterProdutData();
});
