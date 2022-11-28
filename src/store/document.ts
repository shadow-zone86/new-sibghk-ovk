import { defineStore } from "pinia";
import Description from '../interface/Description'
import Document from '../interface/Document'

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
                description: 'Документы по деятельности ОВК',
                data: 'et:global'
            } as Document,
            responsibilities: {
                title: 'responsibilities',
                description: 'Документы по применению мер ответственности',
                data: 'et:caution'
            } as Document,
            case: {
                title: 'case',
                description: 'Положение об ОВК',
                data: 'et:gears'
            } as Document
        } as any,
        document: {
            activities: {
                0: {
                    title: 'ЕОМУ по ЭАМ',
                    description: 'https://cloud.sibghk.ru/f/4986770'
                } as Description,
                1: {
                    title: 'ЕОП проведения проверки',
                    description: 'https://cloud.sibghk.ru/f/4986773'
                } as Description,
                2: {
                    title: 'Порядок по ВА',
                    description: 'https://cloud.sibghk.ru/f/4986772'
                } as Description,
                3: {
                    title: 'Регламент планирования КМ и проведения проверок ОВК ГХК',
                    description: 'https://cloud.sibghk.ru/f/4986771'
                } as Description
            } as any,
            responsibilities: {
                0: {
                    title: 'Приказ ГК от 04.03.16 № 1-186-П  внесение изм в пр ГК меры воздейст исп дисц 1-534-П',
                    description: 'https://cloud.sibghk.ru/f/4986774'
                } as Description,
                1: {
                    title: 'Приказ ГК от 05.06.15 № 534-п об утверждении ЕОМР исп дисц',
                    description: 'https://cloud.sibghk.ru/f/4986775'
                } as Description,
                2: {
                    title: 'Приказ ГК от 25.01.17 № 1-52-П изм. ЕОМР и отмена 417-П',
                    description: 'https://cloud.sibghk.ru/f/4986776'
                } as Description,
                3: {
                    title: 'Приказ ГК от 29.07.16 № 1-696-П изм ЕОМР меры за исполн дисципд',
                    description: 'https://cloud.sibghk.ru/f/4986777'
                } as Description
            } as any,
            case: {
                0: {
                    title: '01-38.001-2018 Положение об ОВК',
                    description: 'https://cloud.sibghk.ru/f/4986778'
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