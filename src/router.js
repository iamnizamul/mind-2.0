import { createRouter, createWebHistory } from 'vue-router';

import CreateNote from './components/note/CreateNote.vue';
// import NotesList from './components/noteslist/NotesList.vue';
import NoteDetail from './components/note/NoteDetail.vue';
import EditNote from './components/note/EditNote.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/createnote' },
        { path: '/createnote', component: CreateNote },
        // { path: '/create', component: CreateNote },
        // { path: '/notes', component: NotesList },
        {
            path: '/:id', component: NoteDetail, props: true
        },
        {
            path: '/:id/editnote', component: EditNote
        },
    ]
})

export default router;