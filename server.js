var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var collection = [
    {
        id: 1,
        title: 'A Javascript Module Loader - RequireJS',
        alt: 'RequireJS',
        shortDescription: 'Talk exploring the basics of RequireJS',
        description: 'RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.',
        author: {
            name: 'Henrique Filho',
            picture: ''
        },
        links: {
            slide: 'http://slid.es/avenuecode/a-javascript-module-loader-require-js',
            youtube: '',
            resources: [
                {
                    name: 'CommonJS wiki',
                    link: 'http://wiki.commonjs.org/wiki/CommonJS'
                },
                {
                    name: 'AMD wiki',
                    link: 'https://github.com/amdjs/amdjs-api/wiki/AMD'
                },
                {
                    name: 'Require JS Official website',
                    link: 'http://acbr.github.io/acbr/ui-bootcamp/blob/master/requirejs.org'
                }
            ]
        },
        images: [],
        //date: 1416276000000,
        date: 'Nov 18 2014',
        available: true
    },

    {
        id: 2,
        title: 'Boosting the client-side even more with Handlebars.js',
        alt: 'Handlebars',
        shortDescription: 'Talk exploring the basics of Handlebars',
        description: 'Handlebars provides the power necessary to let you build semantic templates effectively with no frustration. Handlebars is largely compatible with Mustache templates. In most cases it is possible to swap out Mustache with Handlebars and continue using your current templates.',
        author: {
            name: 'Alysson Ferreira',
            picture: ''
        },
        links: {
            slide: 'http://slid.es/avenuecode/boosting-the-client-side-even-more-with-handlebarsjs',
            youtube: '',
            resources: [
                {
                    name: 'Official website',
                    link: 'http://handlebarsjs.com/'
                },
                {
                    name: 'Javascript.is (Sexy) Blog - Richard of Stanley',
                    link: 'http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating'
                },
                {
                    name: 'Try Handlebars.js right now in your browser - James Fuller',
                    link: 'http://tryhandlebarsjs.com/'
                }
            ]
        },
        images: [],
        //date: 1415671200000,
        date: 'Nov 11 2014',
        available: true
    },

    {
        id: 3,
        title: 'Boosting the client-side with Backbone.js',
        alt: 'Backbone',
        shortDescription: 'Talk exploring the basics of Backbone.js',
        description: 'Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface. The project is hosted on GitHub, and the annotated source code is available, as well as an online test suite, an example application, a list of tutorials and a long list of real-world projects that use Backbone. Backbone is available for use under the MIT software license.',
        author: {
            name: 'Tiago Garcia',
            picture: 'tiago_garcia.jpg'
        },
        links: {
            slide: 'http://slid.es/avenuecode/boosting-the-client-side-with-backbone-js',
            youtube: 'http://www.youtube.com/watch?v=8ZzqMFAU_Kw',
            resources: [
                {
                    name: 'Official website',
                    link: 'http://backbonejs.org/'
                },
                {
                    name: 'Developing Backbone.js Applications - Addy Osmani',
                    link: 'http://addyosmani.github.io/backbone-fundamentals'
                },
                {
                    name: 'The Anatomy of Backbone.js - Codeschool',
                    link: 'http://backbone.codeschool.com/'
                },
                {
                    name: 'How Backbone works behind the scenes',
                    link: 'http://backbonejs.org/docs/backbone.html'
                },
                {
                    name: 'API-First - Design apps from the API',
                    link: 'http://www.api-first.com/'
                },
                {
                    name: 'Tasker project',
                    link: 'https://github.com/tiagorg/tasker'
                }
            ]
        },
        
        images: [],
        //date: 1415066400000,
        date: 'Nov 4th',
        available: true
    },

    {
        id: 4,
        title: 'An overview about testing and Jasmine',
        alt: 'An overview about testing and Jasmine',
        shortDescription: 'Talk exploring the basics of Jasmine',
        description: 'Bring tests for your front-end with Jasmine',
        author: {
            name: 'Igor Lima',
            picture: ''
        },
        links: {
            slide: 'https://slid.es/avenuecode/an-overview-about-testing-and-jasmine',
            youtube: '',
            resources: [
                {
                    name: 'Official wesite',
                    link: 'http://pivotal.github.io/jasmine/'
                },
                {
                    name: 'Jasmine-node',
                    link: 'https://github.com/mhevery/jasmine-node'
                },
                {
                    name: 'Plunker',
                    link: 'http://plnkr.co/'
                }
            ]
        },
        images: [],
        date: 'Oct 28 2014',
        //date: 1414461600000,
        available: true
     },

     {
        id: 5,
        title: 'HTML5',
        alt: 'HTML5',
        shortDescription: 'Talk exploring the basics of HTML5',
        description: 'HTML5 is a core technology markup language of the Internet used for structuring and presenting content for the World Wide Web. It is the fifth revision of the HTML standard.',
        author: {
            name: 'Raphael Oliveira',
            picture: ''
        },
        links: {
            slide: 'http://raphaelddl.github.io/ACTalks-HTML5',
            youtube: '',
            resources: [
                {
                    name: 'W3C Differences from HTML4',
                    link: 'http://www.w3.org/TR/html5-diff/'
                },
                {
                    name: 'WHATWG HTML5 Differences',
                    link: 'https://rawgithub.com/whatwg/html-differences/master/Overview.html'
                },
                {
                    name: 'WHATWG Text Semantic',
                    link: 'http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html'
                },
                {
                    name: 'HTML5Rocks',
                    link: 'http://www.html5rocks.com/en/'
                },
                {
                    name: 'HTML5Doctor',
                    link: 'http://www.html5doctor.com/'
                },
                {
                    name: 'HTML5Rocks',
                    link: 'http://www.html5rocks.com/en/'
                },
                {
                    name: 'HTML5Rocks Slides/Presentation',
                    link: 'http://slides.html5rocks.com/'
                },
                {
                    name: 'BONUS Shadow DOM explained',
                    link: 'http://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/'
                }
            ]
        },
        images: [],
        //date: 1413856800000,
        date: 'Oct 21 2014',
        available: true
     },

     {
        id: 6,
        title: 'Unit Testing',
        alt: 'Unit Testing',
        shortDescription: 'Talk exploring the basics of Unit Testing',
        description: 'Unit Testing live on front-end',
        author: {
            name: 'Rafael Paiva',
            picture: ''
        },
        links: {
            slide: '',
            youtube: '',
            resources: [
                {
                    name: '',
                    link: ''
                },
                {
                    name: '',
                    link: ''
                },
                {
                    name: '',
                    link: ''
                }
            ]
        },
        images: [],
        //date: 1413255600000,
        date: 'Oct 14th',
        available: false
     },

     {
        id: 7,
        title: 'EmberJS',
        alt: 'EmberJS',
        shortDescription: 'Talk exploring the basics of EmberJS',
        description: 'A framework for creating <strong>ambitious</strong> web applications',
        author: {
            name: 'Leonardo Vasconcellos',
            picture: ''
        },
        links: {
            slide: '',
            youtube: '',
            resources: [
                {
                    name: '',
                    link: ''
                },
                {
                    name: '',
                    link: ''
                },
                {
                    name: '',
                    link: ''
                }
            ]
        },
        images: [],
        //date: 1412650800000,
        date: 'Oct 7 2014',
        available: false
     },

     {
        id: 8,
        title: 'Sequelize - A Node JS ORM library',
        alt: 'Sequelize - A Node JS ORM library',
        shortDescription: 'Talk exploring the basics of Sequelize',
        description: 'The Sequelize library provides easy access to MySQL, MariaDB, SQLite or PostgreSQL databases by mapping database entries to objects and vice versa. To put it in a nutshell, it\'s an ORM (Object-Relational-Mapper). The library is written entirely in JavaScript and can be used in the Node.JS environment.',
        author: {
            name: 'Thiago Bonfim',
            picture: ''
        },
        links: {
            slide: '',
            youtube: '',
            resources: [
                {
                    name: '',
                    link: ''
                },
                {
                    name: '',
                    link: ''
                },
                {
                    name: '',
                    link: ''
                }
            ]
        },
        images: [],
        //date: 1412046000000,
        date: 'Sep 30 2014',
        available: false
     }
];

app.engine('hbs', exphbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('index', {
        items: collection.reverse()
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.use('/public', express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;   
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
