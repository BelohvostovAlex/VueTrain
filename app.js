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
        },
        addNewNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        delNote(i) {
           this.notes = this.notes.filter(item => item !== this.notes[i])
        },
    }
}

const app = Vue.createApp(App).mount('#app')

