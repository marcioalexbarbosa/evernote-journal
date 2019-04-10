const Evernote = require('evernote');

var authToken = 'REPLACE WITH YOUR OWN TOKEN';

if (authToken == "your developer token") {
  console.log("Please fill in your developer token");
  console.log("To get a developer token, visit https://sandbox.evernote.com/api/DeveloperToken.action");
  process.exit(1);
}

var client = new Evernote.Client({ token: authToken, sandbox: false });

var noteStore = client.getNoteStore();

var notebookGuid = 'REPLACE WITH YOUR NOTEBOOK GUID';

var filter = {};
filter.notebookGuid = notebookGuid;
var resultSpec = {};
resultSpec.includeTitle = true;

noteStore.findNotesMetadata(filter, 0, 10000, resultSpec).then(data => {
  var guids = [];
  data.notes.forEach(element => {
    guids.push(element.guid);
  });
  return guids;
}).then((guids) => {
  var rand = guids[Math.floor(Math.random() * guids.length)];
  noteStore.getNoteContent(rand).then(note => {
    var text = note.replace(/(<([^>]+)>)/g, "");
    console.log(text);
  }).catch(error => {
    console.log(error);
  })
});
