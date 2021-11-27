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

    addNote(title, body) {
        this.fetchJSON()
        let duplicates = this.notes.data.filter(note => note.title == title)
        if (duplicates.length === 0) {
            this.notes.data.push({ title, body })
            this.dumpJson()
            console.log(chalk.bgGreen('Success: '), chalk.green('Note have been added'))
        }
        else {
            console.log(chalk.bgRed('ERROR: '), chalk.red('this title already exist'))
        }
    }
}

module.exports = NotesController
