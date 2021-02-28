describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', ()=>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el)=> {
      expect($el).to.have.value(75);
    });
  });

  it('Volume number changes when slider changes', ()=>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el)=> {
      expect($el).to.have.value(33);
    });
  });

  it('Audio volume changes when slider changes', ()=>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el)=> {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound src for Party horn', ()=>{
    cy.get('#radio-party-horn').check().trigger('input');
    cy.get('#sound-image').then(($el)=> {
      expect($el).to.have.prop('src',  "http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg");
    });
    cy.get('#horn-sound').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3");
    });
  });

  it('Volume Image for when increasing volume', ()=>{
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg");
    });
    cy.get('#volume-slider').invoke('val', 15).trigger('input');
    cy.get('#volume-image').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg");
    });
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-image').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg");
    });
    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg");
    });
    cy.get('#volume-slider').invoke('val', 50).trigger('input');
    cy.get('#volume-image').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg");
    });
    cy.get('#volume-slider').invoke('val', 66).trigger('input');
    cy.get('#volume-image').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg");
    });
    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg");
    });
    cy.get('#volume-slider').invoke('val', 85).trigger('input');
    cy.get('#volume-image').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg");
    });
    cy.get('#volume-slider').invoke('val', 100).trigger('input');
    cy.get('#volume-image').then(($el)=> {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg");
    });
  });

  it('Honk button disabled on empty/non-numerical input', ()=>{
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el)=> {
      expect($el).to.have.attr('disabled');
    });
    cy.get('#volume-number').type('75');
    cy.get('#volume-number').clear().type('k');
    cy.get('#honk-btn').then(($el)=> {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error on out of bounds numerical input', ()=>{
    cy.get('#volume-number').clear().type('110');
    cy.get('#party-horn-form').within(()=>{
      cy.get('input:invalid').should('have.length', 1);
    });
    cy.get('#volume-number').then(($el)=>{
      expect(($el[0]).checkValidity()).to.be.false;
    });
    cy.get('#volume-number').clear().type('50');
    cy.get('#party-horn-form').within(()=>{
      cy.get('input:invalid').should('have.length', 0);
    });
    cy.get('#volume-number').then(($el)=>{
      expect(($el[0]).checkValidity()).to.be.true;
    });
  });

});
