import s from './style.module.css';
import { Search as SearchIcon } from 'react-bootstrap-icons';

export function SearchBar({ onSubmit }) {

    function submit(evt) {
        if (evt.key === 'Enter' && evt.target.value.trim() !== '') {
            onSubmit(evt.target.value);
        }
    }

    return (
        <>
            <SearchIcon size={27} className={s.icon} />
            <input type='text'
                className={s.input}
                onKeyUp={submit}
                placeholder='Search for a TV Show'
            />
        </>
    )
}
