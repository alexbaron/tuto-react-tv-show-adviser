import './global.css'
import React, { useState, useEffect } from 'react';
import s from './style.module.css'
import { TVShowApi } from './Api/tv-show'
import { BACKDROP_URL } from './config'
import { TVShowDetail } from './components/TVShowDetail/TVShowDetail'
import { Logo } from './components/Logo/Logo';
import logo from './assets/images/logo.png'
import { TVShowList } from './components/TVShowList/TVShowList';
import { SearchBar } from './components/SearchBar/SearchBar';

export function App() {

    const [currentTvShow, setCurrentTvShow] = useState(null);
    const [recommendationList, setRecommendationList] = useState([]);

    const fetchPopulars = async () => {
        const populars = await TVShowApi.fetchPopulars();
        if (populars.length > 0) {
            setCurrentTvShow(populars[0]);
        }
    }

    const fetchRecommendationsById = async (tvShowId) => {
        const recommendations = await TVShowApi.fetchRecommendationsById(tvShowId);
        if (recommendations.length > 0) {
            setRecommendationList(recommendations.slice(0, 10));
        }
    }

    function setCurrentTvShowFromRecommandation(tvShow) {
        setCurrentTvShow(tvShow);
    }

    async function searchTvShow(title) {
        const tvShow = await TVShowApi.fetchTvShowByTitle(title);
        if (tvShow.length > 0) {
            setCurrentTvShow(tvShow[0]);
        }
    }

    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if (currentTvShow) {
            fetchRecommendationsById(currentTvShow.id);
        }
    }, [currentTvShow]);


    console.log('list', recommendationList);

    return <div className={s.main_container}
        style={{
            background:
                currentTvShow ?
                    `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
                    url("${BACKDROP_URL}${currentTvShow.backdrop_path}") no-repeat center / cover` :
                    "black"
        }}>
        <div className={s.header} >
            <div className="row">
                <div className="col-4">
                    <Logo
                        image={logo}
                        title="What to watch"
                        subtitle="Find a show you may love"
                    />
                </div>
                <div className="col-sm-12 col-md-4">
                    <SearchBar onSubmit={searchTvShow} />
                </div>
            </div>
        </div>
        <div className={s.tv_show_detail}>
            {currentTvShow && <TVShowDetail tvShow={currentTvShow} />}
        </div>
        <div className={s.recommendations}>
            {recommendationList.length > 0 && <TVShowList tvShowsList={recommendationList} onClickItem={setCurrentTvShow} />}
        </div>
    </div>
}