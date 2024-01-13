import {useDragon} from '../hooks/useDragon';
import DragonCard from './DragonCard';
import {useEffect} from "react";


const DragonList = () => {
    const { dragons, getAllDragons } = useDragon()

    useEffect(() => {
        getAllDragons()
    }, [getAllDragons])

    return (
        <div className="container" style={dragonListContainer}>
            {dragons?.map( (dragon, i) => <DragonCard key={i} dragon={dragon} />)}
        </div>
    )
}

export default DragonList

const dragonListContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '1.5rem'
}
