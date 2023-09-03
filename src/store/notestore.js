import { defineStore } from "pinia";

export const useNoteStore = defineStore({
    id: 'note',
    state() {
        return {
            notes: [
                {
                    id: '1',
                    title: 'Skills',
                    description: 'HTML, CSS, JavaScript, Vue3',
                    isBookmarked: false
                },
                {
                    id: '2',
                    title: 'Skills to be Acquired',
                    description: 'Tailwind CSS & Nuxt3',
                    isBookmarked: false
                }
            ]
        }
    },
    getters: {
        getLocalStorageNotes() {
            if (localStorage.getItem('notes')) {
                return JSON.parse(localStorage.getItem('notes'))
            } else return null;
        },
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
        },
        findNote(id) {
            if (this.notes.some(note => note.id === id)) {

                return this.notes.find((note) => note.id === id)
            }
            else return {
                title: null,
                description: null
            };
        },
        deleteNote(id) {
            const findIndex = this.notes.findIndex((note) => note.id === id);
            this.notes.splice(findIndex, 1)
            this.setLocalStorage()
        },
        editTitle(id) {
            if (this.notes.some(note => note.id === id)) {
                const findNote = this.notes.find((note) => note.id === id);
                return findNote.title
            } else return null
        },
        editDescription(id) {
            if (this.notes.some(note => note.id === id)) {
                const findNote = this.notes.find((note) => note.id === id);
                return findNote.description
            } else return null
        },
        saveChanges(data) {
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