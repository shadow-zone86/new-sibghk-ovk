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
                post: 'Начальник ОВК'
            } as Worker,
            alexandrova: {
                title: 'alexandrova',
                name: 'Александрова Марина Владимировна',
                post: 'Эксперт КРГ'
            } as Worker,
            aleksandrova: {
                title: 'aleksandrova',
                name: 'Александрова Наталья Александровна',
                post: 'Ведущий юрисконсульт ГАиА'
            } as Worker,
            behgold: {
                title: 'behgold',
                name: 'Бехтгольд Марина Михайловна',
                post: 'Бухгалтер-ревизор ГАиА ОВК'
            } as Worker,
            protopopov: {
                title: 'protopopov',
                name: 'Протопопов Дмитрий Борисович',
                post: 'Инженер КРГ'
            } as Worker,
            rabikov: {
                title: 'rabikov',
                name: 'Рябиков Александр Владимирович',
                post: 'Экономист по БУиАХД КРГ'
            } as Worker,
            salomatova: {
                title: 'salomatova',
                name: 'Саломатова Елена Ивановна',
                post: 'Бухгалтер-ревизор КРГ'
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