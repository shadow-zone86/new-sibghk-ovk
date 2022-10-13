import { defineStore } from "pinia";
import Description from '../interface/Description'

export const useManagementStore = defineStore({
    id: 'management',
    state: () => ({
        description: {
            title: 'Конев Павел Иванович',
            description: 'Заместитель генерального директора предприятия по внутреннему контролю',
        } as Description,
        quote: 'Уважать всякого человека, как самого себя, и поступать с ним, как мы желаем, чтобы с нами поступали, — выше этого нет ничего.' as String
    }),
    getters: {
        getDescription(state) {
            return state.description
        },
        getQuote(state) {
            return state.quote
        }
    },
    actions: {}
})