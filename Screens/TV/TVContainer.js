import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native'
import {tvAPI} from '../../api'
import TvPresenter from "./TVPresenter";


export default () => {

    const [refreshing, setRefreshing] = useState(false)
    const [TV, setTV] = useState({
        loading : true,
        today : [],
        thisWeek : [],
        topRated : [],
        popular : [],
        todayError : null,
        thisWeekError : null,
        topRatedError : null,
        popularError : null
    })

    const getData = async () => {
        const [today, todayError] = await tvAPI.today();
        const [thisWeek, thisWeekError] = await tvAPI.thisWeek();
        const [topRated, topRatedError] = await tvAPI.topRated();
        const [popular, popularError] = await tvAPI.popular()

        setTV({
            loading: false,
            today : today,
            thisWeek : thisWeek,
            topRated : topRated,
            popular : popular,
            todayError : todayError,
            thisWeekError : thisWeekError,
            topRatedError : topRated,
            popularError : popularError
        })
    };


    //코드 설명
    useEffect(() => {
        getData();
    }, []);

    return(
        // ?.length 의 의미
        <TvPresenter
            {...TV}
            refreshFn={getData}
        />
    )
};

