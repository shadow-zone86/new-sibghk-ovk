import { defineStore } from "pinia";
import Menu from '../interface/Menu'

export const useNavbarStore = defineStore({
    id: 'navbar',
    state: () => ({
        mainMenu: {
            about: 'О нас',
            document: 'Документы',
            management: 'Руководство',
            news: 'Новости',
            employees: 'Сотрудники'
        } as Menu
    }),
    getters: {
        getMainMenu(state) {
            return state.mainMenu
        }
    },
    actions: {}
})