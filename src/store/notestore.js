import { defineStore } from "pinia";

export const useNoteStore = defineStore({
    id: 'note',
    state() {
        return {
            notes: [
                {
                    id: '1',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj'
                },
                {
                    id: '2',
                    title: 'Skills to be Acquired',
                    description: 'Tailwind CSS & Nuxt3'
                },
                {
                    id: '3',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj'
                },
                {
                    id: '4',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj'
                },
                {
                    id: '5',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj'
                },
                {
                    id: '6',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj'
                },
                {
                    id: '7',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj'
                },
            ]
        }
    },
    getters: {
        getnotes(state) {
            return state.notes
        },
        
    },
    actions: {
        addNewElement(data) {
            const newItem = {
                id: data.id,
                title: data.title,
                description: data.desc
            }
            this.notes.push(newItem)
        },
        findNote(id) {
            console.log(id);
            console.log(this.notes.find((note) => note.id === id ));
            return this.notes.find((note) => note.id === id )
        },
        deleteNote(id) {
           const findIndex = this.notes.findIndex((note) => note.id === id);
           this.notes.splice(findIndex, 1)
        },
        editTitle(id) {
            const findNote = this.notes.find((note) => note.id === id);
            return findNote.title
        },
        editDescription(id) {
            const findNote = this.notes.find((note) => note.id === id);
            return findNote.description;
        },
        saveChanges(data) {
            const findIndex = this.notes.findIndex((note) => note.id === data.id);
            this.notes[findIndex].title = data.title;
            this.notes[findIndex].description = data.description
        }
    }
})