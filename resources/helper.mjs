/**
 * ES6 module that exports help functions
 * @author André Kless <andre.kless@web.de> 2020
 * @license The MIT License (MIT)
 * @version latest (1.0.0)
 * @changes
 * version 1.0.0 (29.09.2020):
 */

/**
 * used <i>ccmjs</i> version by the help functions of this module (default: latest version that is loaded within the webpage so far)
 * @type {Object}
 */
let ccm = window.ccm;

/**
 * sets the <i>ccmjs</i> version used by the help functions of this module
 * @param {Object} version - <i>ccmjs</i> version
 */
export const use = version => ccm = version;

/**
 * transforms question data to highchart configuration
 * @param {Object} json - question data
 * @returns {Object} highchart configuration
 */
export const question2highchart = json => {
  return {
    "chart": {
      "type": "bar",
      "width": "300",
      "height": "200"
    },
    "title": {
      "text": json.title
    },
    "subtitle": {
      "text": json.subtitle
    },
    "xAxis": {
      "tickLength": 0,
      "lineWidth": 0,
      "categories": json.categories,
      "title": {
        "text": null
      }
    },
    "yAxis": {
      "gridLineWidth": 0,
      "title": {
        "text": null
      },
      "labels": {
        "enabled": false
      }
    },
    "tooltip": {
      "enabled": false
    },
    "plotOptions": {
      "bar": {
        "dataLabels": {
          "enabled": true
        }
      }
    },
    "legend": {
      "enabled": false
    },
    "credits": {
      "enabled": false
    },
    "series": [
      {
        "data": json.data
      }
    ]
  };
};

/**
 * renders a TemplateResult from lit-html in a HTML element
 * @param {Object} content - TemplateResult from lit-html
 * @param {Element} elem - HTML element
 */
export const render = ( content, elem ) => litRender( content, elem );
import { render as litRender } from 'https://unpkg.com/lit-html';

/**
 * defines which questions appear in which order in the app
 * @param {Object[]} questions - data of all available questions
 * @param {string} user - unique key of the currently logged on user
 * @returns {Object[]} wanted questions in defined order
 */
export const selection = ( questions, user ) => {
  const answered = [];
  shuffleArray( questions );
  questions = questions.filter( question => {
    const is_answered = question.voting.yes[ user ] || question.voting.no[ user ] || question.voting.neither[ user ];
    if ( is_answered ) answered.push( question );
    return !is_answered;
  } );
  const sortByLikes = ( a, b ) => Object.values( b.likes ).filter( like => like ).length - Object.values( a.likes ).filter( like => like ).length;
  questions.sort( sortByLikes );
  answered.sort( sortByLikes );
  return questions.concat( answered );
};

/**
 * shuffles an array in place with the Fisher-Yates algorithm
 * @see https://stackoverflow.com/a/6274381
 * @param {Array} array
 * @example
 * const array = [ 1, 2, 3 ];
 * shuffleArray( array );
 * console.log( array );
 */
export const shuffleArray = array => {
  for ( let i = array.length - 1; i > 0; i-- ) {
    const j = Math.floor( Math.random() * ( i + 1 ) );
    [ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ];
  }
};
