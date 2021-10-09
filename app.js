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

        addNewNote() {
            if (this.inputValue != '') {//Если строка не пустая!
                this.notes.push(this.inputValue)//Тут в список переменной note добавляется введённая вользователем строка this.inputValue
                this.inputValue = '' // пустая строка после ввода информации
            }
        },
        doubleCount() {
            console.log('doubleCount') // Не оптимизировано, вызывается при каждом вводе символа в строке
            return this.notes.length * 2
        },
        toUpperCase(item) {//метод для постановки верхнего регистра у заметки
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)  // начинаем удаление с индекса idx и удаляем один элемент
        }
    },
    computed: {

        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {   // если длина вводимых символов > 10 то всё обнуляется
                this.inputValue = ''
            }
            console.log('input Value changed', value) // мониторим что следиться за переменной
        }
    }

}

Vue.createApp(App).mount('#app')