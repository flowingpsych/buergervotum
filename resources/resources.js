/**
 * JavaScript file that provides data-based resources
 * @author André Kless <andre.kless@web.de> 2020
 * @license The MIT License (MIT)
 */

ccm.files[ 'resources.js' ] = {

  "app": {
    "convert": [ "ccm.load", "https://flowingpsych.github.io/buergervotum/resources/helper.mjs#question2highchart" ],
    "css": [ "ccm.load", "https://flowingpsych.github.io/buergervotum/resources/styles.css" ],
    "font": [ "ccm.load", { "url": "https://fonts.googleapis.com/css?family=Courgette", "context": "head", "type": "css" } ],
    "helper": [ "ccm.load", "https://flowingpsych.github.io/buergervotum/resources/helper.mjs" ],
    "permissions": {
      "access": {
        "get": "all",
        "set": "all",
        "del": "group"
      },
      "group": [ "admin" ]
    },
    "store": [ "ccm.store", { "url": "https://ccm2.inf.h-brs.de", "name": "buergervotum" } ],
    "text": {
      "title": "Bürgervotum",
      "add_title": "Hier kannst du eine neue Frage stellen:",
      "add_placeholder": "...was möchtest du wissen?",
      "prev": "Vorherige Frage:",
      "next": "Nächste Frage:",
      "yes": "Ja",
      "neither": "Weiß nicht",
      "no": "Nein",
      "like": "Wichtige Frage",
      "likes": "So viele Menschen finden diese Frage wichtig.",
      "add": "Frage stellen",
      "confirm": "Bestätigen",
      "share": "Frage teilen",
      "cancel": "Abbrechen",
      "report": "Frage melden"
    }
  },

  "app-nachbarschaft": {
    "convert": [ "ccm.load", "https://flowingpsych.github.io/buergervotum/resources/helper.mjs#question2highchart" ],
    "css": [ "ccm.load", "https://flowingpsych.github.io/buergervotum/resources/styles.css" ],
    "font": [ "ccm.load", { "url": "https://fonts.googleapis.com/css?family=Courgette", "context": "head", "type": "css" } ],
    "helper": [ "ccm.load", "https://flowingpsych.github.io/buergervotum/resources/helper.mjs" ],
    "permissions": {
      "access": {
        "get": "all",
        "set": "all",
        "del": "group"
      },
      "group": [ "admin" ]
    },
    "store": [ "ccm.store", { "url": "https://ccm2.inf.h-brs.de", "name": "buergervotum-nachbarschaft" } ],
    "text": {
      "title": "Bürgervotum",
      "add_title": "Hier kannst du eine neue Frage stellen:",
      "add_placeholder": "...was möchtest du wissen?",
      "prev": "Vorherige Frage:",
      "next": "Nächste Frage:",
      "yes": "Ja",
      "neither": "Weiß nicht",
      "no": "Nein",
      "like": "Wichtige Frage",
      "likes": "So viele Menschen finden diese Frage wichtig.",
      "add": "Frage stellen",
      "confirm": "Bestätigen",
      "share": "Frage teilen",
      "cancel": "Abbrechen",
      "report": "Frage melden"
    }
  },

  "dashboard": {
    "data": {
      "store": [ "ccm.store", { "name": "buergervotum", "url": "https://ccm2.inf.h-brs.de" } ],
      "key": {}
    },
    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.7.0.js", {
      "guest": "admin",
      "logged_in": true
    } ]
  },

  "dashboard-nachbarschaft": {
    "data": {
      "store": [ "ccm.store", { "name": "buergervotum-nachbarschaft", "url": "https://ccm2.inf.h-brs.de" } ],
      "key": {}
    },
    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.7.0.js", {
      "guest": "admin",
      "logged_in": true
    } ]
  }

};