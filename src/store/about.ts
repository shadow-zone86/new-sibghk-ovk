import { defineStore } from "pinia";
import Description from '../interface/Description'

export const useAboutStore = defineStore({
    id: 'about',
    state: () => ({
        description: {
            title: 'Подразделение внутреннего контроля и аудита',
            description: 'Внутренний контроль - это действия направленные на получение уверенности в достижении целей. Система внутреннего контроля - это совокупность действий работников и организационных мер, направленных на достижение стратегических целей, соблюдение законов и ЛНА, обеспечение достоверности информации. Каждый работник часть системы ВК.',
        } as Description
    }),
    getters: {
        getDescription(state) {
            return state.description
        }
    },
    actions: {}
})