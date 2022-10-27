import { defineStore } from "pinia";
import Management from '../interface/Management'

export const useManagementStore = defineStore({
    id: 'management',
    state: () => ({
        description: {
            title: 'Конев Павел Иванович',
            description: 'Заместитель генерального директора предприятия по внутреннему контролю',
            quote: 'Уважать всякого человека, как самого себя, и поступать с ним, как мы желаем, чтобы с нами поступали, — выше этого нет ничего.',
            url: 'mailto:PaIKonev@sibghk.ru?cc=MiSDmitriev@sibghk.ru'
        } as Management,
    }),
    getters: {
        getDescription(state) {
            return state.description
        }
    },
    actions: {}
})