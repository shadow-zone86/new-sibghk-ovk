import { defineStore } from "pinia";

export const usePanelStore = defineStore({
    id: 'panel',
    state: () => ({
        onShow: false
    }),
    getters: {
        getOnShow(state) {
            return state.onShow
        }
    },
    actions: {
        setOnShow(show:boolean) {
            this.onShow = show
        }
    }
})