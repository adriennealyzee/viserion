# Spindle #

Create webpages on your iPhone in 5 minutes.
 
## Getting started ##
To install: `npm install`

To run React Native Expo: `npm start`

To run server: `npm run server`

You may need to: 

`brew install watchman`

and 

`npm install -g phantomjs`

## Notes ##


## Developer Notes ##

To render website templates on your machine: 

1. Populate *files* table in database with html components

Run: `node app/models/fileHelper.js`

2. Combine components in *files* table using user preferences and store in *usertemplates* table

**POST** request to: http://127.0.0.1:8080/generate

3. Retrieve list of generated sites

**GET** request to: http://127.0.0.1:8080/usertemplates/list 

Example response:
[
* "usertemplates/59a06f10a2e58106ecaf6397",
* "usertemplates/59a0b834714c7d113993c2ae",
* "usertemplates/59a0b834714c7d113993c2af",
* "usertemplates/59a0b84938029a11457ac8a7",
* "usertemplates/59a0b84938029a11457ac8a8",
* "usertemplates/59a0b868364fe011508d52a1",
* "usertemplates/59a0b868364fe011508d52a2",
* "usertemplates/59a0b8d1bdfd911170165c88",
* "usertemplates/59a0b8d1bdfd911170165c89",
* "usertemplates/59a0bbc490bda01277ba1266",
* "usertemplates/59a0bbc490bda01277ba1267"
]

4. Navigate to endpoints to view websites

e.g.
http://127.0.0.1::8080/usertemplates/59a0b84938029a11457ac8a8
