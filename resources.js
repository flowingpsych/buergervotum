/**
 * @author André Kless <andre.kless@web.de> 2019-2020
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {

  "dashboard": {
    "data": {
      "store": [ "ccm.store", { "name": "quick_question", "url": "https://ccm2.inf.h-brs.de" } ],
      "key": {}
    },
    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.4.0.js" ]
  }

};