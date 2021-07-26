
(function () {
    'use strict';
    var base, self;

    self = this;

    this.hatemile || (this.hatemile = {});

    (base = this.hatemile).util || (base.util = {});

    this.hatemile.util.IDGenerator = (function () {
        function IDGenerator(prefixPart) {
            var randomNumber;
            randomNumber = Math.floor(Math.random() * 9007199254740991).toString();
            if (prefixPart === void 0) {
                this.prefixId = "id-hatemile-" + randomNumber + "-";
            } else {
                this.prefixId = "id-hatemile-" + prefixPart + "-" + randomNumber + "-";
            }
            this.count = 0;
        }

        IDGenerator.prototype.generateId = function (element) {
            if (!element.hasAttribute('id')) {
                element.setAttribute('id', this.prefixId + this.count.toString());
                this.count = this.count + 1;
            }
        };

        return IDGenerator;

    })();

}).call(this);
