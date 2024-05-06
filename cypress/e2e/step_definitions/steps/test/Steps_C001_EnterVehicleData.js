/* global Given, Then, When */
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import GuiaEnterVehicleData from '../pageobjects/PageObjects_C001_EnterVehicleData';
const guiaEnterVehicleData = new GuiaEnterVehicleData;

// Guia Enter Vehicle Data
Given(/^acessar o frame Enter Vehicle Data igual a doze campos$/, () => {
	guiaEnterVehicleData.acessarGuiaEnterVehicleData();
});

When(/^permitir preencher ou selecionar os dados dos campos do veículo$/, () => {
	guiaEnterVehicleData.preencherOuSelecionarCampos();
});


And(/^clicar o frame Enter Vehicle Data igual a zero campos$/, () => {
	guiaEnterVehicleData.validarQtdeCamposPreenchidos();
});

Then(/^clicar no botao Next para o sistema redirecionar para o frame Enter Insurant Data$/, () => {
	guiaEnterVehicleData.clicarNoBotaoNextParaOSistemaRedirecionarParaOFrameEnterInsurantData();
});
