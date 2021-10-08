const App = {
    data() {      //данные
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    // метод, где перечисляем обьекты и набор функции которые присутствуют в приложении
    methods: {
        inputChangeHandler(event) {
            // console.log('inputChangeHandler', event.target.value)   //путь где лежат данные что вводили в строке
            this.inputValue = event.target.value     //this - обращение к data где лежат переменные и им присвается значение из пути куда записываются данный пользователь
        },
        addNewNote() {
            if(this.inputValue != '')//Если строка не пустая!
                this.notes.push(this.inputValue)//Тут в список переменной note добавляется введённая вользователем строка this.inputValue
            this.inputValue = '' // пустая строка после ввода информации
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)  // начинаем удаление с индекса idx и удаляем один элемент
        }
    }
}

Vue.createApp(App).mount('#app')