import { api } from '../api/api'
import { DragonInterface } from '../interfaces/dragon.interface';

export const getAllDragons = () => api.get<DragonInterface[]>('v1/dragon');

export const getDragonById = (id: string) => api.get<DragonInterface>(`v1/dragon/${id}`);

export const deleteDragonById = (id: string) => api.delete<DragonInterface>(`v1/dragon/${id}`);

export const createNewDragon = (dragon: DragonInterface) => api.post<DragonInterface>('v1/dragon/', dragon);

export const updateDragonById = (dragon: DragonInterface) => api.put<DragonInterface>(`v1/dragon/${dragon.id}`, dragon);
