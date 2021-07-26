
(function () {
    'use strict';
    var base;

    this.hatemile || (this.hatemile = {});

    (base = this.hatemile).util || (base.util = {});

    this.hatemile.util.Configure = (function () {
        function Configure(parameters) {
            this.parameters = parameters;
        }

        Configure.prototype.getParameters = function () {
            var clonedParameters, key, ref, value;
            clonedParameters = {};
            ref = this.parameters;
            for (key in ref) {
                value = ref[key];
                clonedParameters[key] = value;
            }
            return clonedParameters;
        };

        Configure.prototype.hasParameter = function (parameter) {
            return this.parameters[parameter] !== void 0;
        };

        Configure.prototype.getParameter = function (name) {
            if (!this.hasParameter(name)) {
                throw new Error("Parameter '" + name + "' not found.");
            }
            return this.parameters[name];
        };

        return Configure;

    })();

}).call(this);
