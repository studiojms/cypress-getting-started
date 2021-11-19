describe('home page', () => {
  it('should make sure app is online', () => {
    cy.visit('https://buger-eats.vercel.app');
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
  });
});
