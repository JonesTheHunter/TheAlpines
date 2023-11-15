document.addEventListener('alpine:init', () => {

    //Dropdown Module
    Alpine.data('dropdown', () => ({
        open: false,
        toggle() {
            this.open = ! this.open
        }
    }))

    Alpine.data('colors', () => ({
        colors: ['red', 'green', 'blue', 'purple', 'yellow', 'black', 'gray', 'brown', 'orange'],
            i: 0,

             get colorsLength() {
                return this.colors.length;
             }
    }))

    Alpine.store('currentUser', {
        name: 'DonnieHostillo',
        posts: ['Post1', ['Post2']]
    })
})