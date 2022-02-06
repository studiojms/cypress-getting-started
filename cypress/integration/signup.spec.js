import signUpPage from '../pages/SignUpPage';

describe('Sign up', () => {
  let deliveryman = null;

  before(() => {
    cy.fixture('deliveryman').then((data) => {
      deliveryman = data;
    });
  });

  it('User must be a deliveryman', () => {
    signUpPage.go();
    signUpPage.fillForm(deliveryman.signup);
    signUpPage.submit();

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

    signUpPage.modalContentShouldBe(expectedMessage);
  });

  it('User should see error when using invalid document', () => {
    signUpPage.go();
    signUpPage.fillForm(deliveryman.invalidDocument);
    signUpPage.submit();

    const expectedMessage = 'Oops! CPF inválido';

    signUpPage.alertMessageShouldBe(expectedMessage);
  });
});
