describe('Reservation Cafe', () => {

  describe('On Load', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    });

    it('should have a title', () => {
      cy.get('h1').contains('Turing Cafe Reservations')
    });

    it('should have a form', () => {
      cy.get('form').should('exist');
    });

    it('should have reservations displayed', () => {
      for (let i = 1; i <= 9; i++) {
        cy.get(`div[id=${i}]`).should('exist');
      }
    });
  });

  describe('Controlled Form', () => {




  });




  describe('User Flow', () => {





  })









});
