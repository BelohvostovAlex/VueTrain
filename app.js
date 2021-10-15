const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Note 2'],
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value
        }
    }
}

const app = Vue.createApp(App).mount('#app')

