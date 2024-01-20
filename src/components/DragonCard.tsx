import { DragonInterface } from '../interfaces/dragon.interface';
import { Tilt } from 'react-tilt';
import { randomDragonImage } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useDragon } from '../hooks/useDragon';


const DragonCard = (props: { dragon: DragonInterface}) => {
    const { dragon } = props;

    const navigate = useNavigate()
    const { deleteDragonById } = useDragon()

    const goToEditDragon = (e: any) => {
        e.stopPropagation();
        navigate(`/dragon/edit/${dragon?.id}`)
    }
    const goToDetailDragon = (e: any) => {
        e.stopPropagation();
        navigate(`/dragon/detail/${dragon?.id}`)
    }
    const handleRemove = (e: any) => {
        e.stopPropagation();
        deleteDragonById(dragon?.id || '')
    }

    return (
        <Tilt
            className='dragon-container'
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
        >
            <div style={dragonCardContainer} className='icon-container' onClick={goToDetailDragon}>
                <div style={dragonCardContainerImage}>
                    <img
                        src={randomDragonImage()}
                        alt='dragon_image'
                        style={dragonCardImage}
                    />
                    <div style={dragonCardEdit} className='icon-hovered' onClick={goToEditDragon}>
                        ✎
                    </div>
                    <div style={dragonCardDelete} className='icon-hovered' onClick={handleRemove}>
                        🗑
                    </div>
                </div>
                <h4 style={dragonCardTitle}>{dragon.name}</h4>
                <p style={dragonCardDescription}>{dragon.histories}</p>
            </div>
        </Tilt>
    )
}

export default DragonCard


const dragonCardContainer = {
    background: 'var(--card-background-color)',
    width: '320px',
    padding: '1.5rem',
    borderRadius: '1rem',
    cursor: 'pointer'
} as any

const dragonCardContainerImage = {
    position: 'relative',
    width: '100%'
} as any

const dragonCardImage = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem'
} as any

const dragonCardEdit = {
    position: 'absolute',
    top: '-1rem',
    left: '-1rem',
    borderRadius: '50%',
    background: '#21b6e3',
    padding: '0 8px',
    color: '#fff'
} as any

const dragonCardDelete = {
    position: 'absolute',
    top: '-1rem',
    right: '-1rem',
    borderRadius: '50%',
    background: '#e3212a',
    padding: '0 8px',
    color: '#fff'
} as any

const dragonCardTitle = {
    margin: '0.5rem 0'
} as any

const dragonCardDescription = {
    fontSize: '0.75rem',
    margin: '0'
} as any
