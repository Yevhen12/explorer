import getCurrentTime from "./getCurrentTime";

const getArrayDate = () => {

    const getSomeDay = (date = new Date(), days) => {
        const newDay = new Date(date.getTime());
        newDay.setDate(date.getDate() - days);

        return newDay;
    }

    const yesterayDate = `${getSomeDay(new Date(), 1).getFullYear()}-${getSomeDay(new Date(), 1).getMonth()}-${getSomeDay(new Date(), 1).getDate()}`
    const lastSevenDays = `${getSomeDay(new Date(), 7).getFullYear()}-${getSomeDay(new Date(), 7).getMonth()}-${getSomeDay(new Date(), 7).getDate()}`
    const lastMonth = `${getSomeDay(new Date(), 30).getFullYear()}-${getSomeDay(new Date(), 30).getMonth()}-${getSomeDay(new Date(), 30).getDate()}`
    const lastYear = `${getSomeDay(new Date(), 365).getFullYear()}-${getSomeDay(new Date(), 365).getMonth()}-${getSomeDay(new Date(), 365).getDate()}`


    const timeArray = [
        {
            name:'All time'
        },
        {
            from: getCurrentTime(),
            to: getCurrentTime(),
            name: 'Today',
        },
        {
            from: getCurrentTime(),
            to: yesterayDate,
            name: 'Yesterday',
        },
        {
            from: getCurrentTime(),
            to: lastSevenDays,
            name: 'Last 7 days',
        },
        {
            from: getCurrentTime(),
            to: lastMonth,
            name: 'Last month',
        },
        {
            from: getCurrentTime(),
            to: lastYear,
            name: 'Last year',
        },
    ]


    return timeArray
}

export default getArrayDate