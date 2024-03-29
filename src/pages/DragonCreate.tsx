import { useState } from 'react';
import { DragonInterface } from '../interfaces/dragon.interface';
import { useDragon } from '../hooks/useDragon';
import { useNavigate } from 'react-router-dom';
import ButtonBack from '../components/ButtonBack';

const initialDragon: DragonInterface = {
    id: '',
    name: '',
    histories: '',
    type: '',
    createdAt: new Date().toISOString()
}

const DragonCreate = () => {
    const navigate = useNavigate()
    const { createNewDragon } = useDragon()
    const [ newDragon, setNewDragonState ] = useState<DragonInterface>(initialDragon)

    const handleDragonChange = (e: any, prop: string) => setNewDragonState({...newDragon, [prop]: e.target.value})

    const handleDragonCreate = async () => {
        await createNewDragon(newDragon)
        navigate('/dragons')
    }

    return (
        <div className='container'>
            <ButtonBack />
            <article className='grid'>
                <div>
                    <hgroup>
                        <h3>Create a New Dragon</h3>
                        <h2>All fields is required</h2>
                    </hgroup>
                    <label>
                        Dragon Name:
                    </label>
                    <input
                        name='name'
                        placeholder='type the dragon name'
                        onChange={(e) => handleDragonChange(e , 'name')}
                    />
                    <label>
                        Dragon Type:
                    </label>
                    <input
                        name='type'
                        placeholder='type the dragon type'
                        onChange={(e) => handleDragonChange(e , 'type')}
                    />
                    <label>
                        Dragon Histories:
                    </label>
                    <input
                        type='textarea'
                        name='histories'
                        placeholder='type the dragon histories'
                        onChange={(e) => handleDragonChange(e , 'histories')}
                    />
                    <button type='submit' className='contrast' onClick={handleDragonCreate}>
                        Create Dragon
                    </button>
                </div>
            </article>
        </div>
    )
}

export default DragonCreate
