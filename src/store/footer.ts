import { defineStore } from "pinia";

export const useFooterStore = defineStore({
    id: 'footer',
    state: () => ({
        description: '© ' + new Date().getFullYear() + ' Отдел внутреннего контроля' as string
    }),
    getters: {
        getDescription(state) {
            return state.description
        }
    },
    actions: {}
})