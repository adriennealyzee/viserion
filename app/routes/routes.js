const express = require('express');
const db = require('../../config/database');
const router = express.Router();
const Promise = require("bluebird");
const fs = require('fs');
Promise.promisifyAll(fs);
const async = require('async');
const Screenshot = require('url-to-screenshot');
const User = require('../models/user');
const File = require('../models/file');
const UserTemplate = require('../models/userTemplate');
const fileController = require('./fileController');
const userTemplateController = require('./userTemplateController');
const keys = require('../../config/keys');

/*
 * /GET /:filename
 */
router.get('/files/:filename', fileController.retrieveOne);

/*
 *  Returns an array of template IDs URLs ['usertemplates/:id', ...] from userID
 */
router.get('/usertemplates/list', userTemplateController.retrieveTemplates);


router.get('/usertemplates/all', userTemplateController.retrieve);

/*
 * /GET /:templateid
 */
router.get('/usertemplates/:id', userTemplateController.retrieveOne);

/*
 * /POST /preferences
 * Receives a JSON of type { layout: [], color: [], title: '' }
 */
router.post('/preferences', function(req, res) {
  var newUser = new User({ preferences: req.body });
  newUser.save(function(err, result) {
    if (err) return console.err('Err saving user: ', err);
    res.status(200).send(result)
  });
});


/*
 * /POST /submitchoice
 * Grabs templateID, generates screenshot image, inserts screenshot image into userTemplates
 */
router.post('/submitchoice', function(req, res) {
  console.log('submitchoice');
  const templateId = "59a19409bc1b89b728fe07cb";

  new Screenshot('http://localhost:8080/usertemplates/' + templateId)
    .width(1080)
    .height(1920)
    .clip()
    .capture()
    .then(img => {
      // TODO: Store in S3

      const screenshotUrl = __dirname + '/../../js/components/example.png';
      fs.writeFileSync(screenshotUrl, img);
      console.log(screenshotUrl);

      userTemplateController.upsert({ _id: templateId }, { screenshot: screenshotUrl})
        .then(updatedDoc => console.log('new screenshotUrl: ' + updatedDoc.screenshot));
    });
});

/*
 * /POST /generate
 * 1) Uses user preferences to pull relevant file components
 * 2) Combines file components to create many different templates
 * 3) Replaces strings in templates with user preferences (e.g. ${BG-COLOR})
 * 4) Stores templates into userTemplates
 */
router.post('/generate', function(req, res) {
  // TODO: Get user preferences
  const userPreferences = { layout: ['standard'], colors: ['blue', 'green'], title: "Chetan's Milk Shop"};

  const beg = '<!DOCTYPE html><html lang="en">';
  const end = '</body></html>';

  // Create templates for each combination or user selected style
  // Finds file names in file table and concatenates bodies of each file object
  var components = {};
  var query = { keywords: ['basic'] };
  File.find(query).exec()
    .then(files => {
      files.map(file => {
        const section = file.section;
        if (components[section]) {
          components[section].push(file);
        } else {
          components[section] = [file];
        }
        // components[section] = components[section] ? components[section].push(file) : [file]
      });

      /*
       * produceCombinations: Produces combinations of components
       * input: { 0: [File({body: 'a'}), File({body: 'b'})],
       *          1: [File({body: 'c'})],
       *          2: [File({body: 'd'})] }
       * output: ['acd', 'bcd']
       */
      var produceCombinations = (obj) => {
        var keys = Object.keys(obj);
        var combinations = [];
        function recur(currCombination, i) {
          if (i === keys.length) return combinations.push(currCombination);
          for (var inner = 0; inner < obj[keys[i]].length; inner++) {
            recur(currCombination + obj[keys[i]][inner].body, i+1)
          }
        }
        recur('', 0);
        return combinations;
      };

      const combinations = produceCombinations(components);

      // Replace with user preferences: replace color and title for each template
      async.each(combinations, function(combination) {
        userPreferences.colors.forEach((color) => {
          let page = combination.replace('${BG-COLOR}', color).replace('${TITLE}', userPreferences.title);
          page = beg + page + end;

          // Store combinations in DB
          // TODO: update user id
          UserTemplate.create({body: page, userid: '1'})
            .then(template => {
            })
            .catch(err => console.log(err));
        });
        res.send('User pages generated');
      })
    });

});

module.exports = router;