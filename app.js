Vue.createApp({

    data: () => ({
        myHtml: '<h1>  удали строку по цифре </h1>',
        title: 'Я есть грут',
        person:{
            firstName:'Dima',
            lastName :'Teter',
            age: 222
        },
        items:[1,2,3,4,5,6]
    }),
//     methods: {
//         stopPropagation(event) {
// event.stopPropagation()
//    аналог
//         }
//     }
}).mount('#app')