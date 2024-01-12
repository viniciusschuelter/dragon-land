import * as dragonService from '../services/dragon.service';
import { DragonInterface } from '../interfaces/dragon.interface';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const useDragon = () => {
    const [dragons, setDragons] = useState<DragonInterface[]>();

    const toastAlert = (status: number, text?: string) => {
        status === 200 ?  toast.success(text || 'Success') : toast.error( 'Error');
    };

    const getAllDragons = useCallback(async () => {
        try {
            const { data } = await dragonService.getAllDragons();
            setDragons(data);
        } catch (e) {
            toastAlert(404);
        }
    }, []);

    const getDragonById = useCallback(async (id: string) => {
        try {
            const { data } = await dragonService.getDragonById(id);
            return data;
        } catch (error) {
            toastAlert(404);
        }
    }, []);

    const createNewDragon = useCallback(async (dragon: DragonInterface) => {
        try {
            const { status } = await dragonService.createNewDragon(dragon);
            toastAlert(status, 'Dragon created');
            return status;
        } catch (e) {
            toastAlert(404);
        }
    }, []);

    const updateDragonById = useCallback(async (dragon: DragonInterface) => {
        try {
            const { status } = await dragonService.updateDragonById(dragon);
            toastAlert(status, 'Dragon updated');
            return status;
        } catch (error) {
            toastAlert(404);
        }
    }, []);

    const deleteDragonById = useCallback(
        async (id: string) => {
            try {
                const { status } = await dragonService.deleteDragonById(id);
                await getAllDragons();
                toastAlert(status, 'Dragon deleted');
            } catch (error) {
                toastAlert(404);
            }
        },
        [getAllDragons]
    );

    return {
        dragons,
        getAllDragons,
        getDragonById,
        createNewDragon,
        updateDragonById,
        deleteDragonById,
    };
};