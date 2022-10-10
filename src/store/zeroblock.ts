import { defineStore } from "pinia";

export const useZeroBlockStore = defineStore({
    id: 'zeroblock',
    state: () => ({
        description: 'This block is intended for nextcloud header' as String
    }),
    getters: {
        getZeroBlock(state) {
            return state.description
        }
    },
    actions: {}
})