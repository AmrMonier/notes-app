const yargs = require('yargs')
const NotesController = require('./notesController')

let notesStorage = new NotesController('notes')

yargs.command({
    command: 'add',
    describe: 'adding a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notesStorage.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'list all existing notes',
    handler: () => {
        let notes = notesStorage.getNotes()
        console.log(notes);
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'read a specific note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(notesStorage.findNote(argv.title));;
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(notesStorage.removeNote(argv.title))
    }
})

yargs.parse()


