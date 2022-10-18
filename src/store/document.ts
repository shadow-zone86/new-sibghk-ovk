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
                title: 'activities',
                description: 'Документы по деятельности ОВК'
            } as Description,
            responsibilities: {
                title: 'responsibilities',
                description: 'Документы по применению мер ответственности'
            } as Description,
            case: {
                title: 'case',
                description: 'Положение об ОВК'
            } as Description
        } as any,
        document: {
            activities: {
                0: {
                    title: 'ЕОМУ по ЭАМ',
                    description: '#'
                } as Description,
                1: {
                    title: 'ЕОП проведения проверки',
                    description: '#'
                } as Description,
                2: {
                    title: 'Порядок по ВА',
                    description: '#'
                } as Description,
                3: {
                    title: 'Регламент планирования КМ и проведения проверок ОВК ГХК',
                    description: '#'
                } as Description
            } as any,
            responsibilities: {
                0: {
                    title: 'Приказ ГК от 04.03.16 № 1-186-П  внесение изм в пр ГК меры воздейст исп дисц 1-534-П',
                    description: '#'
                } as Description,
                1: {
                    title: 'Приказ ГК от 05.06.15 № 534-п об утверждении ЕОМР исп дисц',
                    description: '#'
                } as Description,
                2: {
                    title: 'Приказ ГК от 25.01.17 № 1-52-П изм. ЕОМР и отмена 417-П',
                    description: '#'
                } as Description,
                3: {
                    title: 'Приказ ГК от 29.07.16 № 1-696-П изм ЕОМР меры за исполн дисципд',
                    description: '#'
                } as Description
            } as any,
            case: {
                0: {
                    title: '01-38.001-2018 Положение об ОВК',
                    description: '#'
                } as Description
            } as any
        } as any,
        active: ''
    }),
    getters: {
        getDescription(state) {
            return state.description
        },
        getTypeDocument(state) {
            return state.typeDocument
        },
        getDocument(state) {
            return state.document
        },
        getActive(state) {
            return state.active
        }
    },
    actions: {
        setActive(title:string) {
            (this.active != title) ? this.active = title : this.active = ''
        }
    }
})