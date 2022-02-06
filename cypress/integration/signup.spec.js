import SignUpFactory from '../factories/SignUpFactory';
import signUpPage from '../pages/SignUpPage';

describe('Sign up', () => {
  it('should allow usert to be a deliveryman', () => {
    const deliveryman = SignUpFactory.deliveryman();

    signUpPage.go();
    signUpPage.fillForm(deliveryman);
    signUpPage.submit();

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

    signUpPage.modalContentShouldBe(expectedMessage);
  });

  it('should show error when using invalid document', () => {
    const deliveryman = SignUpFactory.deliveryman();

    deliveryman.cpf = '000000414AA';

    signUpPage.go();
    signUpPage.fillForm(deliveryman);
    signUpPage.submit();

    const expectedMessage = 'Oops! CPF inválido';

    signUpPage.alertMessageShouldBe(expectedMessage);
  });

  it('should show error when using invalid email', () => {
    const deliveryman = SignUpFactory.deliveryman();

    deliveryman.email = 'test.test.com';

    signUpPage.go();
    signUpPage.fillForm(deliveryman);
    signUpPage.submit();

    const expectedMessage = 'Oops! Email com formato inválido.';

    signUpPage.alertMessageShouldBe(expectedMessage);
  });
});
