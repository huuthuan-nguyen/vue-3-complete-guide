const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: 'Kean'
        };
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
        }
    }
});
app.mount('#events');