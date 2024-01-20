import { useEffect, useState } from 'react';
import { DragonInterface } from '../interfaces/dragon.interface';
import { useDragon } from '../hooks/useDragon';
import { useParams } from 'react-router-dom';
import ButtonBack from '../components/ButtonBack';
import { randomDragonImage } from '../utils/utils';

const initialDragon: DragonInterface = {
    id: '',
    name: '',
    histories: '',
    type: '',
    createdAt: new Date().toISOString()
}

const DragonDetail = () => {
    const { dragonId } = useParams()

    const {getDragonById } = useDragon()

    const [dragon, setDragon] = useState<DragonInterface>(initialDragon)

    useEffect( () => {
        getDragonById(dragonId as string).then( (dragon) => {
            setDragon(dragon || initialDragon)
        })
    }, [getDragonById])


    return (
        <div className='container'>
            <ButtonBack />
            <article className='grid'>
                <div>
                    <hgroup>
                        <h3>Dragon {dragon.name}</h3>
                    </hgroup>

                    <img
                        src={randomDragonImage()}
                        alt='dragon_image'
                        style={dragonCardImage}
                    />
                    <label>
                        Dragon Name:
                    </label>
                    <input placeholder={dragon.name} disabled />
                    <label>
                        Dragon Type:
                    </label>
                    <input placeholder={dragon.type} disabled />
                    <label>
                        Dragon Histories:
                    </label>
                    <input placeholder={dragon.histories} disabled />
                    <label>
                        Created at:
                    </label>
                    <input placeholder={dragon?.createdAt} disabled />
                </div>
            </article>
        </div>
    )
}

export default DragonDetail

const dragonCardImage = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem'
}
