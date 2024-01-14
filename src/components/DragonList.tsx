import { useDragon } from '../hooks/useDragon';
import DragonCard from './DragonCard';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./layout/Header";
import {DragonInterface} from "../interfaces/dragon.interface";


const DragonList = () => {
    const navigate = useNavigate()
    const { dragons, getAllDragons } = useDragon()

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [dragonsFiltered, setDragonsFiltered] = useState<DragonInterface[]>([]);

    useEffect(() => {
        getAllDragons()
        setDragonsFiltered(dragons || []);
    }, [])

    useEffect(() => {
        const filtered = dragons?.filter((dragon) => dragon?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
        setDragonsFiltered(filtered)
    }, [searchTerm])

    const handleSearchTermChange = (e) => setSearchTerm(e.target.value)

    return (
        <>
            <Header />
            <div style={{display: 'flex'}}>
                <input
                    name='searchTerm'
                    style={{marginRight: '1rem'}}
                    placeholder='Search by your favorite dragon'
                    onChange={handleSearchTermChange}
                />
                <button
                    type='submit'
                    className='contrast'
                    style={{width: '200px'}}
                    onClick={() => navigate('/dragon/create')}>
                    New Dragon
                </button>
            </div>
            <div style={dragonListContainer}>
                {(!searchTerm ? dragons : dragonsFiltered)?.map( (dragon, i) => <DragonCard key={i} dragon={dragon} />)}
            </div>
        </>
    )
}

export default DragonList

const dragonListContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '1.5rem',
    justifyContent: 'center',
}
