const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: 'Kean'
        };
    },
    watch: {
        name(value) {
            console.log(value)
        }
    },
    computed: {
        fullname() {
            if (this.name === '')
                return '';

            return this.name + ' ' + 'Nguyen';
        }
    },
    methods: {
        add() {
            this.counter++;
        },
        substract() {
            this.counter--
        },
        setName(event) {
            this.name = event.target.value;
        },
        submitForm() {
            alert('Submitted!')
        },
        resetInput() {
            this.name = '';
        }
    }
});
app.mount('#events');