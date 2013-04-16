var jam = {
    "packages": [
        {
            "name": "coffee-script",
            "location": "vendor/coffee-script",
            "main": "./extras/coffee-script.js"
        },
        {
            "name": "text",
            "location": "vendor/text",
            "main": "text.js"
        },
        {
            "name": "backbone.marionette",
            "location": "vendor/backbone.marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "backbone.babysitter",
            "location": "vendor/backbone.babysitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "underscore",
            "location": "vendor/underscore",
            "main": "underscore.js"
        },
        {
            "name": "cs",
            "location": "vendor/cs",
            "main": "cs.js"
        },
        {
            "name": "jquery",
            "location": "vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "backbone",
            "location": "vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.wreqr",
            "location": "vendor/backbone.wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        }
    ],
    "version": "0.2.15",
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "backbone.babysitter": {
            "deps": [
        	"backbone",
        	"underscore",
        	"jquery"
            ]
        },
        "backbone.wreqr": {
            "deps": [
        	"backbone",
        	"underscore",
        	"jquery"
            ]
        },
        "backbone.marionette": {
            "deps": [
                "backbone",
                "backbone.babysitter",
                "backbone.wreqr"
            ],
            "exports": "Backbone.Marionette"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "coffee-script",
            "location": "vendor/coffee-script",
            "main": "./extras/coffee-script.js"
        },
        {
            "name": "text",
            "location": "vendor/text",
            "main": "text.js"
        },
        {
            "name": "backbone.marionette",
            "location": "vendor/backbone.marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "backbone.babysitter",
            "location": "vendor/backbone.babysitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "underscore",
            "location": "vendor/underscore",
            "main": "underscore.js"
        },
        {
            "name": "cs",
            "location": "vendor/cs",
            "main": "cs.js"
        },
        {
            "name": "jquery",
            "location": "vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "backbone",
            "location": "vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.wreqr",
            "location": "vendor/backbone.wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "backbone.babysitter": {
            "deps": [
        	"backbone",
        	"underscore",
        	"jquery"
            ]
        },
        "backbone.wreqr": {
            "deps": [
        	"backbone",
        	"underscore",
        	"jquery"
            ]
        },
        "backbone.marionette": {
            "deps": [
                "backbone",
                "backbone.babysitter",
                "backbone.wreqr"
            ],
            "exports": "Backbone.Marionette"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "coffee-script",
            "location": "vendor/coffee-script",
            "main": "./extras/coffee-script.js"
        },
        {
            "name": "text",
            "location": "vendor/text",
            "main": "text.js"
        },
        {
            "name": "backbone.marionette",
            "location": "vendor/backbone.marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "backbone.babysitter",
            "location": "vendor/backbone.babysitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "underscore",
            "location": "vendor/underscore",
            "main": "underscore.js"
        },
        {
            "name": "cs",
            "location": "vendor/cs",
            "main": "cs.js"
        },
        {
            "name": "jquery",
            "location": "vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "backbone",
            "location": "vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.wreqr",
            "location": "vendor/backbone.wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "backbone.babysitter": {
            "deps": [
        	"backbone",
        	"underscore",
        	"jquery"
            ]
        },
        "backbone.wreqr": {
            "deps": [
        	"backbone",
        	"underscore",
        	"jquery"
            ]
        },
        "backbone.marionette": {
            "deps": [
                "backbone",
                "backbone.babysitter",
                "backbone.wreqr"
            ],
            "exports": "Backbone.Marionette"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}