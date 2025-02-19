describe('Reservation Cafe', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  describe('On Load', () => {

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

    it('should allow users to type their inputs into the form', () => {
      cy.get('input[name="name"]').type('Jessica')
      cy.get('input[value="Jessica"]').should('exist')

      cy.get('input[name="date"]').type('04/07')
      cy.get('input[value="04/07"]').should('exist')

      cy.get('input[name="time"]').type('11')
      cy.get('input[value="11"]').should('exist')

      cy.get('input[name="number"]').type('12')
      cy.get('input[value="12"]').should('exist')
    });

  });

  describe('User Flow', () => {

    it('should allow users to submit a reservation', () => {
      cy.get('input[name="name"]').type('Memow')
      cy.get('input[name="date"]').type('04/08')
      cy.get('input[name="time"]').type('5')
      cy.get('input[name="number"]').type('3')
      cy.get('button[class="reservation-button"]').click()

      cy.get('div').should('contain', 'Memow')
      cy.get('div').should('contain', '04/08')
      cy.get('div').should('contain', '5 pm')
      cy.get('div').should('contain', 'Number of guests: 3')
    });

  });

});
