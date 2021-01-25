const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            hide: false
        };
    },
    computed: {
        buttonCaption() {
            return this.hide ? 'Show List' : 'Hide List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';
        },
        toggleShow() {
            this.hide = !this.hide;
        }
    }
});

app.mount('#assignment');