describe('DatColorPickr', () => {

	beforeEach(() => {
        // require('child_process').spawn('npm', ['run', 'build'], {
        //     stdio: ['ignore', 'inherit', 'inherit'],
        //     shell: true
        // });
		cy.visit('/');
	});

	it('contains the color pickr', () => {
		cy.contains('.color-pickr', 'It contains the color pickr');
    });
    
});