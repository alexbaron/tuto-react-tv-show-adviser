import s from './style.module.css';
import { TVShowListItem } from '../TVShowListItem/TVShowListItem';

export function TVShowList({ tvShowsList, onClickItem }) {

    console.log(tvShowsList);

    return (
        <>
            <div className={s.title}>
                tv show list
            </div>
            <div className={s.list}>
                {
                    tvShowsList.map((tvShowItem) => {
                        return (
                            <span key={tvShowItem.id} className={s.tv_show_list_item}>
                                <TVShowListItem
                                    tvShow={tvShowItem}
                                    onClick={onClickItem}
                                />
                            </span>
                        )
                    })
                }
            </div>
        </>
    )
}