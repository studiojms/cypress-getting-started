const faker = require('faker');
const cpf = require('gerador-validador-cpf');

export default {
  deliveryman: function () {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
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

    return data;
  },
};
