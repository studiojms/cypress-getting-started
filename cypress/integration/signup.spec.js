describe('Sign up', () => {
  it('User must be a deliveryman', () => {
    cy.visit('https://buger-eats.vercel.app');
    cy.get('a[href="/deliver"]').click();

    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');

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

    cy.get('input[name="name"]').type(deliveryman.name);
    cy.get('input[name="cpf"]').type(deliveryman.cpf);
    cy.get('input[name="email"]').type(deliveryman.email);
    cy.get('input[name="whatsapp"]').type(deliveryman.whatsapp);

    cy.get('input[name="postalcode"]').type(deliveryman.address.postalcode);
    cy.get('input[type="button"][value="Buscar CEP"]').click();

    cy.get('input[name="address-number"]').type(deliveryman.address.number);
    cy.get('input[name="address-details"]').type(deliveryman.address.details);

    cy.get('input[name="address"]').should('have.value', deliveryman.address.street);
    cy.get('input[name="district"]').should('have.value', deliveryman.address.district);
    cy.get('input[name="city-uf"]').should('have.value', deliveryman.address.city_st);

    cy.contains('.delivery-method li', deliveryman.delivery_method).click();

    cy.get('input[type="file"][accept^="image"]').attachFile(deliveryman.file);

    cy.get('button[type="submit"]').click();

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

    cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage);
  });
});
