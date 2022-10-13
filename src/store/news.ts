import { defineStore } from "pinia";
import Description from '../interface/Description'

export const useNewsStore = defineStore({
    id: 'news',
    state: () => ({
        news: {
            0: {
                title: 'На ГХК заработал дополнительный канал коммуникаций с сотрудниками отдела внутреннего контроля',
                description: 'На Горно-химическом комбинате открыт дополнительный канал коммуникации для взаимодействия работников предприятия с отделом внутреннего контроля (ОВК). На канале можно найти нормативно-правовые акты, устанавливающие статус, функции, права, обязанности и ответственность ОВК, а также акты, которыми ОВК руководствуется в своей деятельности. С помощью канала можно узнать о сотрудниках отдела и напрямую обратиться за консультацией.'
            } as Description,
            1: {
                title: '12 октября 2022 года в рамках международного форума «Российская энергетическая неделя» Госкорпорация «Росатом» и ПАО «НОВАТЭК» подписали Меморандум о взаимопонимании в отношении сотрудничества в сфере декарбонизации',
                description: 'Меморандум предусматривает приобретение предприятиями группы «НОВАТЭК», в частности Комплексом по фракционированию и перевалке стабильного газового конденсата в порту Усть-Луга, электроэнергии, выработанной на ветроэлектростанциях Росатома. Покупка «зеленой» электроэнергии будет способствовать снижению углеродного следа продукции «НОВАТЭКа», следуя требованиям международных стандартов. Стороны намерены сотрудничать в области развития ветроэнергетики в сложных условиях Арктики. Меморандум также предусматривает оценку возможности внедрения технических решений Росатома в процессах производства СПГ и низкоуглеродного водорода, аммиака, генерации и хранения электроэнергии. «Поддерживая инициативы по борьбе с изменением климата и ориентируясь на максимальное соответствие своей деятельности международным стандартам в области экологии, Госкорпорация «Росатом» последовательно реализует стратегию по увеличению низкоуглеродной генерации и уделяет особое внимание проектам на перспективном рынке поставки «зеленой» электроэнергии. В настоящее время все больше компаний выбирает путь устойчивого развития бизнеса. А это залог конкурентоспособности и долгосрочного коммерческого успеха», - отметил Алексей Лихачев.'
            } as Description,
            2: {
                title: 'В рамках Форума «Российская энергетическая неделя-2022», который открылся 12 октября в Москве, состоялась сессия «Низкоуглеродная энергетика в мире: кризис – это время возможностей». Сессия была организована Госкорпорацией «Росатом».',
                description: 'Спикеры обсуждали проблематику и задачи поддержания стабильности работы энергосистем и надежного энергоснабжения потребителей экономичными и экологически чистыми источниками энергии. Министр энергетики РФ Николай Шульгин, открывая сессию подчеркнул, что цель достижения углеродной нейтральности в России и мире никто не отменял. Но пути достижения заявленных целей у всех стран разные. В России сегодня один из самых лучших углеродных балансов в стране, но и он будет претерпевать изменения. В частности, Н. Шульгин подтвердил, что доля чистой атомной генерации будет увеличиваться и достигнет обозначенных ранее ориентиров в 25% от общего энергобаланса страны. «Мы наблюдаем рост инвестиций в атомную энергетику. Не только в России, но и во всем мире», - сказал он. Генеральный директор Госкорпорации «Росатом» Алексей Лихачев в своем выступлении подчеркнул, что идеальный энергобаланс должен «опираться на несколько видов генерации». При этом он отметил, что в атомной энергетике новые технологии будущего уже закладываются сегодня. Прежде всего, перспективные направления заложены в национальном «атомном проекте». Речь идет о реакторных установках 4-го поколения и замыкании с их помощью ядерного топливного цикла. С этой целью реализуется проект «Прорыв» в г. Северск Томской области. А. Лихачев подчеркнул: «Ничего подобного сейчас даже не разрабатывается в других странах. В конце 2020-х годов мы будем иметь референтную новую технологию». Он также отметил, что огромные перспективы развития атомной энергетики открываются перед многими странами сегодня благодаря малым модульным реакторам. «По совокупности критериев атомная генерация всегда впереди. На жизненном цикле мы абсолютно сопоставимы по выбросам СО2 с ветрогенерацией. Мы должны с уважением относиться к своему технологическому ландшафту, поэтому лидирующие в мире российские атомные технологии должны развиваться», - заявил А. Лихачев. Министр энергетики Беларуси Виктор Каранкевич рассказал о масштабном проекте Белорусской АЭС и влиянии ее на увеличение доли низкоуглеродной энергетики в энергобалансе страны. С вводом в строй специалистами Росатома второго энергоблока станции будет вырабатываться порядка 18 млрд. кВт.ч электроэнергии. При этом прорабатывается вопрос о возможности расширения количества атомных энергоблоков в Республике Беларусь. В. Каранкевич заявил, что партнерство с Росатомом будет расширяться в сфере научно-технического сотрудничества. Заместитель генерального директора МАГАТЭ Михаил Чудаков подтвердил рост интереса к атомной энергетике во всем мире. Причина тому – ее предсказуемость и стабильность. Сегодня 32 страны мира эксплуатируют АЭС и около 50 стран заявили, что намерены развивать атомную энергетику. По его мнению, для достижения углеродных целей необходимо увеличить в три раза количество вводимых в эксплуатацию энергоблоков в мире, а также в ближайшие 30 лет инвестировать в атомную генерацию около 3 трлн. долларов.'
            } as Description
        } as any,
        active: 0 as number
    }),
    getters: {
        getNews(state) {
            return state.news
        },
        getActive(state) {
            return state.active
        }
    },
    actions: {
        setActive(click:number) {
            switch (click) {
                case 0:
                    (this.active > 0) ? this.active-- : this.active=(Object.keys(this.news).length-1)
                    break
                case 1:
                    (this.active < Object.keys(this.news).length-1) ? this.active++ : this.active=0
                    break
            }
        }
    }
})