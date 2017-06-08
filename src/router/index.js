import Router from 'vue-router';
import Start from '@/components/Start';
import Narratives from '@/components/narrative/narrative';
import Characters from '@/components/character/character';
import Timelines from '@/components/timeline/timeline';

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Start',
            component: Start
        },
        {
            path: '/narratives',
            name: 'Narratives',
            component: Narratives
        },
        {
            path: '/characters',
            name: 'Characters',
            component: Characters
        },
        {
            path: '/timelines',
            name: 'Timelines',
            component: Timelines
        }
    ]
});
