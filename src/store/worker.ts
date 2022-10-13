import { defineStore } from "pinia";
import Description from '../interface/Description'
import Worker from '../interface/Worker'

export const useWorkerStore = defineStore({
    id: 'worker',
    state: () => ({
        description: {
            title: 'Сотрудники',
            description: 'Сотрудники'
        } as Description,
        worker: {
            dmitriev: {
                title: 'dmitriev',
                name: 'Дмитриев Михаил Сергеевич',
                post: 'Начальник отдела'
            } as Worker,
            aleksandrova: {
                title: 'aleksandrova',
                name: 'Александрова Наталья Александровна',
                post: 'Ведущий юрисконсульт'
            } as Worker,
            protopopov: {
                title: 'protopopov',
                name: 'Протопопов Дмитрий Борисович',
                post: 'Инженер'
            } as Worker,
            salomatova: {
                title: 'salomatova',
                name: 'Саломатова Елена Ивановна',
                post: 'Специалист по закупкам'
            } as Worker,
            behgold: {
                title: 'behgold',
                name: 'Бехтгольд Марина Михайловна',
                post: 'Бухгалтер-ревизор'
            } as Worker
        } as any
    }),
    getters: {
        getDescription(state) {
            return state.description
        },
        getWorker(state) {
            return state.worker
        }
    },
    actions: {}
})