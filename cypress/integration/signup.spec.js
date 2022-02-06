import signUpPage from '../pages/SignUpPage';

describe('Sign up', () => {
  let deliveryman = null;

  before(() => {
    cy.fixture('deliveryman').then((data) => {
      deliveryman = data;
    });
  });

  it('should allow usert to be a deliveryman', () => {
    signUpPage.go();
    signUpPage.fillForm(deliveryman.signup);
    signUpPage.submit();

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

    signUpPage.modalContentShouldBe(expectedMessage);
  });

  it('should show error when using invalid document', () => {
    signUpPage.go();
    signUpPage.fillForm(deliveryman.invalidDocument);
    signUpPage.submit();

    const expectedMessage = 'Oops! CPF inválido';

    signUpPage.alertMessageShouldBe(expectedMessage);
  });

  it('should show error when using invalid email', () => {
    signUpPage.go();
    signUpPage.fillForm(deliveryman.invalidEmail);
    signUpPage.submit();

    const expectedMessage = 'Oops! Email com formato inválido.';

    signUpPage.alertMessageShouldBe(expectedMessage);
  });
});
