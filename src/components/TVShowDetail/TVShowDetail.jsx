
import s from './style.module.css';
import { FiveStarRating } from '../FiveStarRating/FiveStarRating';

export function TVShowDetail({ tvShow }) {
    const rating = tvShow.vote_average / 2;
    return (
        <div>
            <div className={s.title}>{tvShow.name}</div>
            <div className={s.rating_container}>
                <FiveStarRating rating={rating} />
                <div className={s.rating}>{rating}/5</div>
            </div>
            <div className={s.overview}>
                {'' !== tvShow.overview ?
                    tvShow.overview :
                    'Quidem alias ultrices feugiat sodales ipsa, est eveniet vero laboris, totam potenti, sociosqu varius sapiente, cras, rerum nemo. Occaecat nunc, arcu, aute vehicula taciti. Quis totam nulla dicta ipsum cumque? Esse blandit officia assumenda litora, cum, mauris senectus mi ornare? Deleniti animi, sunt exercitationem vulputate! '
                }
            </div>
        </div>
    )

}