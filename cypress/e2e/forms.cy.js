describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('taras@kaldun.com')
        cy.contains(/Successfully subbed: taras@kaldun.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: taras@kaldun.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: taras@kaldun.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('taras@kaldun.tech')
        cy.contains(/Invalid email: taras@kaldun.tech!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: taras@kaldun.tech!/i).should('exist')
        cy.wait(3000)

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
    })
})