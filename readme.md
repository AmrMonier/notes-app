# Notes APP
a command line utility to manage your notes

this app is built as a practice following the Node.js tutorials by [Andrew Maed](https://github.com/andrewjmead)

# How to Use it

1. clone the App
```
$ git clone https://github.com/AmrMonier/notes-app.git
```
2. install all dependecies
```
$ npm install
```
3. you are good to go

# Available command
1. Adding new note
this command take to option the *title* and the *body* and it can be executed using the following line
 titles of the notes are *unique*
 ```
 $ node app.js add --title="your title" --body="the body of the note"
 ```

 2. Removing a note
 ```
 $ node app.js remove --title="your title" 
 ```
 3. Reading a specific note
```
 $ node app.js read --title="your title" 
 ```
 4. List all notes
 ```
 $ node app.js list  
 ```
