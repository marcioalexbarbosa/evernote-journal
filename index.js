const Evernote = require('evernote');

var doIt = function() {
	var authToken = 'REPLACE WITH YOUR OWN TOKEN';

	if (authToken == "your developer token") {
		console.log("Please fill in your developer token");
		console.log("To get a developer token, visit https://sandbox.evernote.com/api/DeveloperToken.action");
		process.exit(1);
	}

	var client = new Evernote.Client({ token: authToken, sandbox: false });

	var noteStore = client.getNoteStore();

	var notebookGuid = 'REPLACE WITH YOU NOTEBOOK GUID';

	var filter = {};
	filter.notebookGuid = notebookGuid;
	var resultSpec = {};
	resultSpec.includeTitle = true;

	var offset = 0;

	noteStore.findNotesMetadata(filter, offset, 10000, resultSpec).then(async data => {
		var guids = [];
		var totalNotes = data.totalNotes;
		data.notes.forEach(element => {
			guids.push(element.guid);
		});
		while (offset < totalNotes) {
			offset += 250;
			data = await noteStore.findNotesMetadata(filter, offset, 250, resultSpec);
			totalNotes = data.totalNotes;
			data.notes.forEach(element => {
				guids.push(element.guid);
			});
		}
		return guids;
	}).then((guids) => {
		var rand = guids[Math.floor(Math.random() * guids.length)];

		noteStore.getNoteWithResultSpec(rand, {includeContent: true}).then(note => {
			var text = note.content.replace(/(<([^>]+)>)/g, "").trim();
			console.log(note.title);
			console.log(text);
		}).catch(error => {
			console.log(error);
		})
	});
};

doIt();