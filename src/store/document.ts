import { defineStore } from "pinia";
import Description from '../interface/Description'

export const useDocumentStore = defineStore({
    id: 'document',
    state: () => ({
        description: {
            title: 'Документы',
            description: 'Нормативно-правовые акты, устанавливающие статус, функции, права, обязанности и ответственность ОВК, а так же акты, которыми ОВК руководствуется в своей деятельности',
        } as Description,
        typeDocument: {
            activities: {
                title: '',
                description: 'Документы по деятельности ОВК'
            } as Description,
            responsibilities: {
                title: '',
                description: 'Документы по применению мер ответственности'
            } as Description,
            case: {
                title: '',
                description: 'Положение об ОВК'
            } as Description
        } as any
    }),
    getters: {
        getDescription(state) {
            return state.description
        },
        getTypeDocument(state) {
            return state.typeDocument
        }
    },
    actions: {}
})