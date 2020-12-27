const app = Vue.createApp({
    data() {
        return {
            courseGoal: '<em>Finish the course and learn Vue</em>',
            vueLink: 'https://v3.vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoal;
            } else {
                return 'Master Vue!';
            }
        }
    }
});

app.mount('#user-goal');