import { Column } from '../models/column';

export const COLUMNS: Column[] = [
  {
    _id: 1,
    title: 'Todo',
    description: 'Les tâches à faire',
    position: 0,
  },
  {
    _id: 2,
    title: 'Doing',
    description: 'Les tâches en cours',
    position: 2,
  },
  {
    _id: 3,
    title: 'Done',
    description: 'Les tâches terminés',
    position: 3,
  },
];
