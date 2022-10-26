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
                post: 'Начальник ОВК',
                url: 'mailto:MiSDmitriev@sibghk.ru',
                question:
                    '<p><b>' + 'Направления, по которым можно задать вопросы:' + '</b></p>' +
                    '- соблюдение требований корпоративного управления;' + '<br />' + 
                    '- управление объектами недвижимости;' + '<br />' +
                    '- формирование себестоимости и затрат;' + '<br />' +
                    '- расчеты с дебиторами и кредиторами;' + '<br />' +
                    '- эффективность бизнес-процессов (управленческих, производственных);' + '<br />' +
                    '- управление рисками (риск-менеджмент);' + '<br />' +
                    '- взаимодействие с ГКНО.'
            } as Worker,
            alexandrova: {
                title: 'alexandrova',
                name: 'Александрова Марина Владимировна',
                post: 'Эксперт КРГ',
                url: 'mailto:MVlAleksandrova@sibghk.ru?cc=MiSDmitriev@sibghk.ru',
                question:
                    '<p><b>' + 'Направления, по которым можно задать вопросы:' + '</b></p>' +
                    '- выполнение ключевых показателей эффективности деятельности;' + '<br />' + 
                    '- НИОКР;' + '<br />' +
                    '- использование трудовых ресурсов и фондов оплаты труда;' + '<br />' +
                    '- проверка проектов и программ;' + '<br />' +
                    '- проверка целевого финансирования.'
            } as Worker,
            aleksandrova: {
                title: 'aleksandrova',
                name: 'Александрова Наталья Александровна',
                post: 'Ведущий юрисконсульт ГАиА',
                url: 'mailto:NaAAleksandrova@sibghk.ru?cc=MiSDmitriev@sibghk.ru',
                question:
                    '<p><b>' + 'Направления, по которым можно задать вопросы:' + '</b></p>' +
                    '- выполнение ключевых показателей эффективности деятельности;' + '<br />' + 
                    '- учет НМА;' + '<br />' +
                    '- закупочная деятельность;' + '<br />' +
                    '- претензионно-исковая работа;' + '<br />' +
                    '- взаимодействие с ГКНО.'
            } as Worker,
            behgold: {
                title: 'behgold',
                name: 'Бехтгольд Марина Михайловна',
                post: 'Бухгалтер-ревизор ГАиА ОВК',
                url: 'mailto:MMBekhtgold@sibghk.ru?cc=MiSDmitriev@sibghk.ru',
                question:
                    '<p><b>' + 'Направления, по которым можно задать вопросы:' + '</b></p>' +
                    '- использование основных средств и иных ТМЦ;' + '<br />' + 
                    '- формирование себестоимости и затрат;' + '<br />' +
                    '- использование обязательств по договорам;' + '<br />' +
                    '- претензионно-исковая работа.'
            } as Worker,
            protopopov: {
                title: 'protopopov',
                name: 'Протопопов Дмитрий Борисович',
                post: 'Инженер КРГ',
                url: 'mailto:DBProtopopov@sibghk.ru?cc=MiSDmitriev@sibghk.ru',
                question:
                    '<p><b>' + 'Направления, по которым можно задать вопросы:' + '</b></p>' +
                    '- управление запасами;' + '<br />' + 
                    '- сметное нормирование;' + '<br />' +
                    '- расчеты с подотчетными лицами;' + '<br />' +
                    '- исполнение обязательств по договорам.'
            } as Worker,
            rabikov: {
                title: 'rabikov',
                name: 'Рябиков Александр Владимирович',
                post: 'Экономист по БУиАХД КРГ',
                url: 'mailto:AVRyabikov@sibghk.ru?cc=MiSDmitriev@sibghk.ru',
                question:
                    '<p><b>' + 'Направления, по которым можно задать вопросы:' + '</b></p>' +
                    '- проверка капитального строительства;' + '<br />' + 
                    '- проверка проектов и программ;' + '<br />' +
                    '- управление проектами;' + '<br />' +
                    '- управление рисками (риск-менеджмент).'
            } as Worker,
            salomatova: {
                title: 'salomatova',
                name: 'Саломатова Елена Ивановна',
                post: 'Бухгалтер-ревизор КРГ',
                url: 'mailto:EISalomatova@sibghk.ru?cc=MiSDmitriev@sibghk.ru',
                question:
                    '<p><b>' + 'Направления, по которым можно задать вопросы:' + '</b></p>' +
                    '- управление запасами;' + '<br />' + 
                    '- расчеты с подотчетнами лицами;' + '<br />' +
                    '- проверка проектов и программ;' + '<br />' +
                    '- проверка целевого финансирования;' + '<br />' +
                    '- проверка специальных резервных фондов.'
            } as Worker
        } as any,
        isShown: false,
        isWorker: ''
    }),
    getters: {
        getDescription(state) {
            return state.description
        },
        getWorker(state) {
            return state.worker
        },
        getToogle(state) {
            return state.isShown
        },
        getQuestionWorker(state) {
            return state.isWorker
        }
    },
    actions: {
        setToogle(worker:string) {
            this.isWorker = worker
            this.isShown = !this.isShown
        }
    }
})