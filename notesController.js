const { default: chalk } = require('chalk')

const fs = require('fs')

class NotesController {
    constructor(fileName) {
        this.fileName = fileName + '.json'

        this.notes = {}
    }

    dumpJson() {
        fs.writeFileSync(this.fileName, JSON.stringify(this.notes))
    }
    fetchJSON() {
        try {
            this.notes = JSON.parse(fs.readFileSync(this.fileName).toString())
        } catch (error) {
            this.notes = { data: [] }
        }
    }

    getNotes() {
        this.fetchJSON()
        return this.toString()
    }
    findNote(title) {
        this.fetchJSON()
        let note = this.notes.data.find(note => note.title === title)
        if (note)
            return `\n${chalk.blue('Title')}: ${note.title}\n${chalk.blue('Body')}: ${note.body}\n`
        else
            return chalk.red(`can't find a note with this title`)
    }

    toString = () => {
        this.fetchJSON()
        if (this.notes.data.length == 0) {
            return 'No notes found...'
        }
        else {
            let notes = ''
            this.notes.data.forEach(note => {
                notes += `\n${chalk.blue('Title')}: ${note.title}\n${chalk.blue('Body')}: ${note.body}\n`
            });
            return notes
        }
    }

    addNote(title, body) {
        this.fetchJSON()
        let duplicateNote = this.notes.data.find(note => note.title == title)
        if (!duplicateNote) {
            this.notes.data.push({ title, body })
            this.dumpJson()
            console.log(chalk.bgGreen('Success: '), chalk.green('Note have been added'))
        }
        else {
            console.log(chalk.bgRed('ERROR: '), chalk.red('this title already exist'))
        }
    }

    removeNote(title) {
        this.fetchJSON()
        let notesCount = this.notes.data.length
        this.notes.data = this.notes.data.filter(note => note.title !== title)
        this.dumpJson()
        return notesCount === this.notes.data.length ? chalk.red('title not found') : chalk.green('note deleted successfully')
    }
}

module.exports = NotesController
