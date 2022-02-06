import SignUpPage from '../pages/SignUpPage';

describe('Sign up', () => {
  it('User must be a deliveryman', () => {
    const deliveryman = {
      name: 'John Doe',
      cpf: '00000014141',
      email: 'john@doe.com',
      whatsapp: '11999999999',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'Ap 443',
        district: 'Itaim Bibi',
        city_st: 'São Paulo/SP',
      },
      delivery_method: 'Moto',
      file: 'images/user-document.jpeg',
    };

    const signUpPage = new SignUpPage();

    signUpPage.go();
    signUpPage.fillForm(deliveryman);
    signUpPage.submit();

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

    signUpPage.modalContentShouldBe(expectedMessage);
  });

  it('User should see error when using invalid document', () => {
    const deliveryman = {
      name: 'John Doe',
      cpf: '000000141AA',
      email: 'john@doe.com',
      whatsapp: '11999999999',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'Ap 443',
        district: 'Itaim Bibi',
        city_st: 'São Paulo/SP',
      },
      delivery_method: 'Moto',
      file: 'images/user-document.jpeg',
    };

    const signUpPage = new SignUpPage();

    signUpPage.go();
    signUpPage.fillForm(deliveryman);
    signUpPage.submit();

    const expectedMessage = 'Oops! CPF inválido';

    signUpPage.alertMessageShouldBe(expectedMessage);
  });
});
