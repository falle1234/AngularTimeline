import { EventItem } from '../models/eventItem';

export const EVENTS: EventItem[] = [
    { type: 'CALLFROM',  description: 'phonecall from +45 40377310', id: 1},
    { type: 'CALLTO', description: 'phonecall to +45 40377310', id: 2},
    { type: 'DOCUMENTSENT', description: '"Efterlønserklæring" sent', id: 3},
    { type: 'DOCUMENTREAD', description: '"Efterlønserklæring" read', id: 4}
];
