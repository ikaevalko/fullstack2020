describe('Blog app', function() {

  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.request('POST', 'http://localhost:3001/api/users', {
      username: 'test user',
      name: 'test name',
      password: 'test password'
    })
    cy.visit('http://localhost:3001')
  })

  it('login form is shown initially', function() {
    cy.contains('log in to application')
  })

  describe('Login', function() {
    it('succeeds with correct credentials', function() {
      cy.get('input:first').type('test user')
      cy.get('input:last').type('test password')
      cy.contains('login').click()
      cy.contains('test name logged in')
    })

    it('fails with wrong credentials', function() {
      cy.get('input:first').type('wrong')
      cy.get('input:last').type('wrong')
      cy.contains('login').click()
      cy.contains('wrong credentials')
    })
  })

  describe('When logged in', function() {
    beforeEach(function() {
      cy.get('input:first').type('test user')
      cy.get('input:last').type('test password')
      cy.contains('login').click()
    })

    it('a blog can be created', function() {
      cy.contains('new blog').click()
      cy.get('input').eq(0).type('test blog')
      cy.get('input').eq(1).type('test author')
      cy.get('input').eq(2).type('test url')
      cy.get('form').within(function () {
        cy.contains('create').click()
      })
      cy.contains('test blog')
    })
  })
})