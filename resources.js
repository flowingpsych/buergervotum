/**
 * @author André Kless <andre.kless@web.de> 2020
 * @license The MIT License (MIT)
 */

ccm.files[ 'resources.js' ] = {

  "buergervotum": {
    "font": [ "ccm.load", { "url": "https://fonts.googleapis.com/css?family=Courgette", "context": "head", "type": "css" } ],
    "store": [ "ccm.store", { "url": "https://ccm2.inf.h-brs.de", "name": "quick_question" } ],
    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.7.0.js", { "guest": true, "logged_in": true } ]
  },

  "dashboard": {
    "data": {
      "store": [ "ccm.store", { "name": "quick_question", "url": "https://ccm2.inf.h-brs.de" } ],
      "key": {}
    },
    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.7.0.js", {
      "guest": "admin",
      "logged_in": true
    } ]
  }

};