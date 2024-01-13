import {useCallback, useEffect, useState} from 'react';
import { DragonInterface } from '../interfaces/dragon.interface';
import { useDragon } from '../hooks/useDragon';
import {useNavigate, useParams} from 'react-router-dom';

const initialDragon: DragonInterface = {
    id: '',
    name: '',
    histories: '',
    type: '',
    createdAt: new Date().toISOString()
}

const DragonEdit = () => {
    const { dragonId } = useParams()
    const navigate = useNavigate()

    const {updateDragonById, getDragonById} = useDragon()

    const [updDragon, setUpdDragonState] = useState<DragonInterface>(initialDragon)

    useEffect( () => {
        getDragonById(dragonId as string).then( (dragon) => {
            setUpdDragonState(dragon)
        })
    }, [getDragonById])

    const handleDragonChange = (e, prop) => setUpdDragonState({...updDragon, [prop]: e.target.value})

    const handleDragonUpdate = async () => {
        await updateDragonById(updDragon)
        navigate('/dragons')
    }

    return (
        <div className='container'>
            <h3 style={backButton} onClick={() => navigate('/dragons')}>
                ← Back
            </h3>
            <article className='grid'>
                <div>
                    <hgroup>
                        <h3>Edit Dragon {updDragon.name}</h3>
                        <h2>All fields is required</h2>
                    </hgroup>
                    <label>
                        Dragon Name:
                    </label>
                    <input
                        name='name'
                        value={updDragon.name}
                        placeholder='type the dragon name'
                        onChange={(e) => handleDragonChange(e, 'name')}
                    />
                    <label>
                        Dragon Type:
                    </label>
                    <input
                        name='type'
                        value={updDragon.type}
                        placeholder='type the dragon type'
                        onChange={(e) => handleDragonChange(e, 'type')}
                    />
                    <label>
                        Dragon Histories:
                    </label>
                    <input
                        type='textarea'
                        name='histories'
                        value={updDragon.histories}
                        placeholder='type the dragon histories'
                        onChange={(e) => handleDragonChange(e, 'histories')}
                    />
                    <button type='submit' className='contrast' onClick={handleDragonUpdate}>
                        Update Dragon
                    </button>
                </div>
            </article>
        </div>
    )
}

export default DragonEdit

const backButton = {
    position: 'absolute',
    cursor: 'pointer',
    left: '1rem',
    top: '1rem'
}
