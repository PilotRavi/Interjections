/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This Special Words skill built with the Amazon Alexa Skills
 * nodejs skill development kit to play Alexa Speechcons at random.
 * This skill supports multiple lauguages. (en-CA, en-GB, en-IN, en-US).
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.xxxxxxxxxxxxx';

const languageStrings = {
    'en-CA': {
        translation: {
            Speechcons: ["abracadabra",
                "achoo",
                "aha",
                "ahem",
                "ahoy",
                "all righty",
                "aloha",
                "aooga",
                "argh",
                "arrivederci",
                "as you wish",
                "au revoir",
                "aw man",
                "baa",
                "bada bing bada boom",
                "bah humbug",
                "bam",
                "bang",
                "batter up",
                "bazinga",
                "beep beep",
                "bingo",
                "blah",
                "blarg",
                "blast",
                "boing",
                "bon appetit",
                "bonjour",
                "bon voyage",
                "boo",
                "boo hoo",
                "boom",
                "booya",
                "bravo",
                "bummer",
                "caw",
                "cha ching",
                "checkmate",
                "cheerio",
                "cheers",
                "cheer up",
                "chirp",
                "choo choo",
                "clank",
                "click clack",
                "cock a doodle doo",
                "coo",
                "cowabunga",
                "darn",
                "ding dong",
                "ditto",
                "d'oh",
                "dot dot dot",
                "duh",
                "dum",
                "dun dun dun",
                "dynomite",
                "eek",
                "eep",
                "encore",
                "en garde",
                "eureka",
                "fancy that",
                "geronimo",
                "giddy up",
                "good grief",
                "good luck",
                "good riddance",
                "gotcha",
                "great scott",
                "heads up",
                "hear hear",
                "hip hip hooray",
                "hiss",
                "honk",
                "howdy",
                "hurrah",
                "hurray",
                "huzzah",
                "jeepers creepers",
                "jiminy cricket",
                "jinx",
                "just kidding",
                "kaboom",
                "kablam",
                "kaching",
                "kapow",
                "katchow",
                "kazaam",
                "kerbam",
                "kerboom",
                "kerching",
                "kerchoo",
                "kerflop",
                "kerplop",
                "kerplunk",
                "kerpow",
                "kersplat",
                "kerthump",
                "knock knock",
                "le sigh",
                "look out",
                "mamma mia",
                "man overboard",
                "mazel tov",
                "meow",
                "merci",
                "moo",
                "nanu nanu",
                "neener neener",
                "no way",
                "now now",
                "oh boy",
                "oh brother",
                "oh dear",
                "oh my",
                "oh snap",
                "oink",
                "okey dokey",
                "oof",
                "ooh la la",
                "open sesame",
                "ouch",
                "oy",
                "phew",
                "phooey",
                "ping",
                "plop",
                "poof",
                "pow",
                "quack",
                "read 'em and weep",
                "ribbit",
                "righto",
                "roger",
                "shucks",
                "splash",
                "spoiler alert",
                "squee",
                "swish",
                "swoosh",
                "ta da",
                "ta ta",
                "tee hee",
                "there there",
                "thump",
                "tick tick tick",
                "tick-tock",
                "touche",
                "tsk tsk",
                "tweet",
                "uh huh",
                "uh oh",
                "voila",
                "vroom",
                "wahoo",
                "wah wah",
                "watch out",
                "way to go",
                "well done",
                "well well",
                "wham",
                "whammo",
                "whee",
                "whew",
                "woof",
                "whoops a daisy",
                "whoosh",
                "woo hoo",
                "wow",
                "wowza",
                "wowzer",
                "yadda yadda yadda",
                "yay",
                "yikes",
                "yippee",
                "yoink",
                "yoo hoo",
                "you bet",
                "yowza",
                "yowzer",
                "yuck",
                "yum",
                "zap",
                "zing",
                "zoinks",
            ],
            WELCOME_MESSAGE: 'Hello, Welcome to the Special Words skill. You can say next for a special word or a phrase, or, you can say stop... What can I help you with?',
            SKILL_NAME: 'Canadian ',
            HELP_MESSAGE: 'You can say next, or, you can say stop... What can I help you with?',
            STOP_MESSAGE:  'Goodbye!',
        },
    },
    'en-GB': {
        translation: {
            Speechcons: ["abracadabra",
                "ace",
                "achoo",
                "ahoy",
                "all righty",
                "aloha",
                "aooga",
                "arrivederci",
                "as if",
                "as you wish",
                "au revoir",
                "aw",
                "aw man",
                "awesome",
                "baa",
                "bah humbug",
                "bam",
                "bang",
                "bazinga",
                "beep beep",
                "bingo",
                "blah",
                "blarg",
                "blast",
                "blimey",
                "bob's your uncle",
                "boing",
                "bon appetit",
                "bon voyage",
                "bonjour",
                "boo",
                "boo hoo",
                "booya",
                "bother",
                "bravo",
                "caw",
                "cha ching",
                "checkmate",
                "cheer up",
                "cheerio",
                "cheers",
                "chirp",
                "choo choo",
                "clank",
                "clickety clack",
                "cock a doodle doo",
                "codswallop",
                "coo",
                "cowabunga",
                "crikey",
                "d'oh",
                "darn",
                "ditto",
                "dot dot dot",
                "duh",
                "dun dun dun",
                "eek",
                "eep",
                "en garde",
                "encore",
                "eureka",
                "ew",
                "fancy that",
                "geronimo",
                "giddy up",
                "good golly",
                "good grief",
                "good luck",
                "good riddance",
                "gosh",
                "gotcha",
                "great scott",
                "ha",
                "ha ha",
                "heads up",
                "hear hear",
                "hip hip hooray",
                "hiss",
                "honk",
                "howdy",
                "howzat",
                "hurrah",
                "hurray",
                "huzzah",
                "jeepers creepers",
                "jiminy cricket",
                "jinx",
                "just kidding",
                "kablam",
                "kaboom",
                "kaching",
                "kapow",
                "knock knock",
                "le sigh",
                "look out",
                "mamma mia",
                "man overboard",
                "mazel tov",
                "meow",
                "merci",
                "moo",
                "no way",
                "nom nom",
                "now now",
                "oh boy",
                "oh dear",
                "oh my",
                "oh my giddy aunt",
                "oh snap",
                "okey dokey",
                "oof",
                "ooh la la",
                "open sesame",
                "ouch",
                "ow",
                "oy",
                "pardon",
                "phew",
                "phooey",
                "ping",
                "plop",
                "pop",
                "pow",
                "quack",
                "read 'em and weep",
                "ribbit",
                "righto",
                "roger",
                "sigh",
                "simples",
                "splash",
                "spoiler alert",
                "squee",
                "swish",
                "swoosh",
                "ta da",
                "tallyho",
                "tee hee",
                "there there",
                "thump",
                "tick tick tick",
                "tick tock",
                "tosh",
                "touche",
                "tsk tsk",
                "tut tut",
                "tweet",
                "uh huh",
                "uh oh",
                "voila",
                "vroom",
                "wahoo",
                "watch out",
                "way to go",
                "well done",
                "well well",
                "wham",
                "whammo",
                "whee",
                "whoop",
                "whoops",
                "whoops a daisy",
                "whoosh",
                "woo hoo",
                "wow",
                "wowza",
                "yadda yadda yadda",
                "yippee",
                "yoink",
                "you bet",
                "yowza",
                "yum",
                "zap",
                "zing",
                "zoinks",
            ],
            WELCOME_MESSAGE: 'Hello, Welcome to the Special Words skill. You can say next for a special word or a phrase, or, you can say stop... What can I help you with?',
            SKILL_NAME: 'British ',
            HELP_MESSAGE: 'You can say next, or, you can say stop... What can I help you with?',
            STOP_MESSAGE:  'Bye for now!',
        },
    },
    'en-IN': {
        translation: {
            Speechcons: ["ace",
                "achoo",
                "ah",
                "ahoy",
                "aii",
                "aila",
                "aiyo",
                "all righty",
                "aloha",
                "arrey",
                "as if",
                "as you wish",
                "au revoir",
                "aw",
                "aw man",
                "awesome",
                "awright",
                "baap re",
                "balle balle",
                "bam",
                "bang",
                "bazinga",
                "beep beep",
                "bhai",
                "bingo",
                "blast",
                "blimey",
                "boing",
                "bon appetit",
                "boo",
                "boo hoo",
                "booya",
                "bother",
                "bravo",
                "caw",
                "cha ching",
                "chal hut",
                "checkmate",
                "chee",
                "cheer up",
                "cheers",
                "chirp",
                "clank",
                "clickety clack",
                "cock a doodle doo",
                "coo",
                "dei",
                "dhatt",
                "dishoom",
                "ditto",
                "dot dot dot",
                "duh",
                "eek",
                "eep",
                "eesh",
                "en garde",
                "eureka",
                "ew",
                "giddy up",
                "good grief",
                "good luck",
                "good riddance",
                "gotcha",
                "great scott",
                "ha",
                "haan",
                "haanji",
                "haay",
                "heads up",
                "hiss",
                "hmm",
                "honk",
                "howdy",
                "howzat",
                "hurray",
                "jai hind",
                "jeepers creepers",
                "ji",
                "ji huzoor",
                "jiminy cricket",
                "jinx",
                "kaboom",
                "kaching",
                "knock knock",
                "macha",
                "meow",
                "merci",
                "moo",
                "na-na",
                "nah",
                "no way",
                "nom nom",
                "oh",
                "oh boy",
                "oh dear",
                "oh ho",
                "oh my",
                "oh snap",
                "okey dokey",
                "ooh la la",
                "open sesame",
                "ouch",
                "ow",
                "oy",
                "oye",
                "paavam",
                "pardon",
                "phew",
                "phooey",
                "plop",
                "pop",
                "pow",
                "quack",
                "rascala",
                "ribbit",
                "righto",
                "roger",
                "shabash",
                "shathaais",
                "sheesh",
                "sigh",
                "simple",
                "splash",
                "squee",
                "swish",
                "swoosh",
                "ta da",
                "tee hee",
                "that's all for now folks",
                "that's all, folks",
                "theek hai",
                "there there",
                "thump",
                "tick tick tick",
                "tick tock",
                "tsk tsk",
                "tweet",
                "uff",
                "uh huh",
                "uh oh",
                "vroom",
                "waaaah",
                "waah",
                "watch out",
                "way to go",
                "well done",
                "well well",
                "wham",
                "whee",
                "whoop",
                "whoops a daisy",
                "whoosh",
                "woo hoo",
                "wow",
                "wowza",
                "yaar",
                "yippee",
                "yo",
                "yum",
                "yummy",
                "yup",
                "zap",
                "zing",
            ],
            WELCOME_MESSAGE: 'Namaste, Welcome to the Special Words skill. You can say next for a special word or a phrase, or, you can say stop... What can I help you with?',
            SKILL_NAME: 'Indian ',
            HELP_MESSAGE: 'You can say next, or, you can say stop... What can I help you with?',
            STOP_MESSAGE:  'Ta Ta for now!',
        },
    },
    'en-US': {
        translation: {
            Speechcons: ["abracadabra","achoo","aha","ahem","ahoy","all righty","aloha",
                "aooga","argh","arrivederci","as you wish","au revoir","aw man","baa",
                "bada bing bada boom","bah humbug","bam","bang","batter up","bazinga",
                "beep beep","bingo","blah","blarg","blast","boing","bon appetit","bonjour",
                "bon voyage","boo","boo hoo","boom","booya","bravo","bummer","caw","cha ching",
                "checkmate","cheerio","cheers","cheer up","chirp","choo choo","clank",
                "click clack","cock a doodle doo","coo","cowabunga","darn","ding dong","ditto",
                "d’oh","dot dot dot","duh","dum","dun dun dun","dynomite","eek","eep",
                "encore","en gard","eureka","fancy that","geronimo","giddy up","good grief",
                "good luck","good riddance","gotcha","great scott","heads up","hear hear",
                "hip hip hooray","hiss","honk","howdy","hurrah","hurray","huzzah","jeepers creepers",
                "jiminy cricket","jinx","just kidding","kaboom","kablam","kaching","kapow",
                "katchow","kazaam","kerbam","kerboom","kerching","kerchoo","kerflop",
                "kerplop","kerplunk","kerpow","kersplat","kerthump","knock knock","le sigh",
                "look out","mamma mia","man overboard","mazel tov","meow","merci","moo",
                "nanu nanu","neener neener","no way","now now","oh boy","oh brother","oh dear",
                "oh my","oh snap","oink","okey dokey","oof","ooh la la","open sesame","ouch",
                "oy","phew","phooey","ping","plop","poof","pop","pow","quack","read ‘em and weep",
                "ribbit","righto","roger","ruh roh","shucks","splash","spoiler alert","squee",
                "swish","swoosh","ta da","ta ta","tee hee","there there","thump","tick tick tick",
                "tick-tock","touche","tsk tsk","tweet","uh huh","uh oh","voila","vroom",
                "wahoo","wah wah","watch out","way to go","well done","well well","wham",
                "whammo","whee","whew","woof","whoops a daisy","whoosh","woo hoo","wow",
                "wowza","wowzer","yadda yadda yadda","yay","yikes","yippee","yoink","yoo hoo",
                "you bet","yowza","yowzer","yuck","yum","zap","zing","zoinks",
            ],
            WELCOME_MESSAGE: 'Hi, Welcome to the Special Words skill. You can say next for a special word or a phrase, or, you can say stop... What can I help you with?',
            SKILL_NAME: 'American ',
            HELP_MESSAGE: 'You can say next, or, you can say stop... What can I help you with?',
            STOP_MESSAGE:  'See you later!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        const speechOutput = this.t('WELCOME_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':askWithCard', speechOutput, reprompt, this.t('SKILL_NAME'), speechOutput);
    },
    'SWIntent': function () {
        this.emit('GetSpeechcon');
    },
    'GetSpeechcon': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('Speechcons');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = "<say-as interpret-as='interjection'>" + randomFact + "</say-as>";
        this.emit(':askWithCard', speechOutput, this.t('HELP_MESSAGE'), this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function() {
        this.emit(':ask', 'Sorry I didnt understand that. Say help for assistance');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
