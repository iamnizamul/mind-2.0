import { defineStore } from "pinia";

export const useNoteStore = defineStore({
    id: 'note',
    state() {
        return {
            notes: [
                {
                    id: '1',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj',
                    isBookmarked: false
                },
                {
                    id: '2',
                    title: 'Skills to be Acquired',
                    description: 'Tailwind CSS & Nuxt3',
                    isBookmarked: false
                },
                {
                    id: '3',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj',
                    isBookmarked: false
                },
                {
                    id: '4',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj',
                    isBookmarked: false
                },
                {
                    id: '5',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj',
                    isBookmarked: false
                },
                {
                    id: '6',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj',
                    isBookmarked: false
                },
                {
                    id: '7',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3 jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjjjjj jjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjjj jjjjjjj jjjjjj jjjjjjjjj jj jjjjjjjjjjjjjjjjjjjjjjjbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhh nhhhhhhhhh jjj',
                    isBookmarked: false
                },
            ]
        }
    },
    getters: {
        // getnotes(state) {
        //     return state.notes
        // },
        getLocalStorageNotes() {
            if (localStorage.getItem('notes')) {
                return JSON.parse(localStorage.getItem('notes'))
            } else return null;
        },
        // getnotes(state) {
        //     return state.getStorageNotes? JSON.parse(localStorage.getItem('notes')) : state.notes
        // },
        getnotes(state) {
            if (localStorage.getItem('notes')) {
                state.notes = JSON.parse(localStorage.getItem('notes'))
            }
            return state.notes
        }

    },
    actions: {
        addNewElement(data) {
            const newItem = {
                id: data.id,
                title: data.title,
                description: data.desc,
                isBookmarked: data.isBookmarked
            }
            this.notes.push(newItem)
            if (!localStorage.getItem('notes')) {
                this.setLocalStorage();
            } else {
                const storageExisting = JSON.parse(localStorage.getItem('notes'));
                storageExisting.push(newItem);
                localStorage.setItem('notes', JSON.stringify(storageExisting))
            }

            // if (!this.getStorageNotes) {
            //     localStorage.setItem('notes', JSON.stringify(this.notes))
            // } else {
            //     console.log(this.getStorageNotes);
            //     this.getStorageNotes.unshift(newItem);
            //     console.log(this.getStorageNotes);
            //     localStorage.setItem('notes', JSON.stringify(this.getStorageNotes))
            // }

        },
        findNote(id) {
            // if (this.getStorageNotes) {
            //     return this.getStorageNotes.find((note) => note.id === id )
            // } else
            if (this.notes.some(note => note.id === id)) {

                return this.notes.find((note) => note.id === id)
            }
            else return {
                title: null,
                description: null
            };
        },
        deleteNote(id) {
            // if (this.getStorageNotes) {
            //     const findIndex = this.getStorageNotes.findIndex((note) => note.id === id);
            //     this.getStorageNotes.splice(findIndex, 1);
            //     localStorage.setItem('notes', JSON.stringify(this.getStorageNotes))
            // } else {
            const findIndex = this.notes.findIndex((note) => note.id === id);
            this.notes.splice(findIndex, 1)
            this.setLocalStorage()
            // }
        },
        editTitle(id) {
            if (this.notes.some(note => note.id === id)) {
                const findNote = this.notes.find((note) => note.id === id);
                return findNote.title
            } else return null
        },
        editDescription(id) {
            // if (this.getStorageNotes) {
            //     const findNote = this.getStorageNotes.find((note) => note.id === id);
            //     return findNote.description;
            // } else {
            if (this.notes.some(note => note.id === id)) {
                const findNote = this.notes.find((note) => note.id === id);
                return findNote.description
            } else return null
            // }
        },
        saveChanges(data) {
            // const findIndex = this.getStorageNotes.findIndex((note) => note.id === data.id);
            // const tempStorageNotes = this.getStorageNotes;
            // tempStorageNotes[findIndex].title = data.title;
            // tempStorageNotes[findIndex].description = data.description;
            // localStorage.setItem('notes', tempStorageNotes)
            const findIndex = this.notes.findIndex((note) => note.id === data.id);
            this.notes[findIndex].title = data.title;
            this.notes[findIndex].description = data.description;
            this.setLocalStorage()
        },
        toggleBookmark(id) {
            console.log(id);
            console.log(this.notes.find((note) => note.id === id));
            this.notes.find((note) => note.id === id).isBookmarked = !this.notes.find((note) => note.id === id).isBookmarked;
            this.setLocalStorage()
        },
        isBookmarkedFn(id) {
            return this.notes.find((note) => note.id === id).isBookmarked
        },
        setLocalStorage() {
            localStorage.setItem('notes', JSON.stringify(this.notes))
        }
    }
})