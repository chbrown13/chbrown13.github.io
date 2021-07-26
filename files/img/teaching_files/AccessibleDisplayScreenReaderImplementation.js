
(function () {
    'use strict';
    var base, self;

    self = this;

    this.hatemile || (this.hatemile = {});

    (base = this.hatemile).implementation || (base.implementation = {});

    this.hatemile.implementation.AccessibleDisplayScreenReaderImplementation = (function () {
        var CLASS_FORCE_READ_AFTER, CLASS_FORCE_READ_BEFORE, CLASS_TEXT_SHORTCUTS, DATA_ARIA_BUSY_OF, DATA_ARIA_CHECKED_OF, DATA_ARIA_DROPEFFECT_OF, DATA_ARIA_EXPANDED_OF, DATA_ARIA_GRABBED_OF, DATA_ARIA_HASPOPUP_OF, DATA_ARIA_INVALID_OF, DATA_ARIA_LEVEL_OF, DATA_ARIA_ORIENTATION_OF, DATA_ARIA_PRESSED_OF, DATA_ARIA_SELECTED_OF, DATA_ARIA_SORT_OF, DATA_ATTRIBUTE_ACCESSKEY_OF, DATA_ATTRIBUTE_AUTOCOMPLETE_OF, DATA_ATTRIBUTE_DOWNLOAD_OF, DATA_ATTRIBUTE_HEADERS_OF, DATA_ATTRIBUTE_LANGUAGE_OF, DATA_ATTRIBUTE_RANGE_MAX_OF, DATA_ATTRIBUTE_RANGE_MIN_OF, DATA_ATTRIBUTE_REQUIRED_OF, DATA_ATTRIBUTE_TARGET_OF, DATA_ATTRIBUTE_TITLE_OF, DATA_INVALID_DATE, DATA_INVALID_DATETIME, DATA_INVALID_DATETIME_OF, DATA_INVALID_DATE_OF, DATA_INVALID_EMAIL, DATA_INVALID_EMAIL_OF, DATA_INVALID_LENGTH, DATA_INVALID_LENGTH_OF, DATA_INVALID_MONTH, DATA_INVALID_MONTH_OF, DATA_INVALID_PATTERN, DATA_INVALID_PATTERN_OF, DATA_INVALID_RANGE, DATA_INVALID_RANGE_OF, DATA_INVALID_REQUIRED, DATA_INVALID_REQUIRED_OF, DATA_INVALID_TIME, DATA_INVALID_TIME_OF, DATA_INVALID_URL, DATA_INVALID_URL_OF, DATA_INVALID_WEEK, DATA_INVALID_WEEK_OF, DATA_ROLE_OF, ID_CONTAINER_SHORTCUTS_AFTER, ID_CONTAINER_SHORTCUTS_BEFORE;

        ID_CONTAINER_SHORTCUTS_BEFORE = 'container-shortcuts-before';

        ID_CONTAINER_SHORTCUTS_AFTER = 'container-shortcuts-after';

        CLASS_TEXT_SHORTCUTS = 'text-shortcuts';

        CLASS_FORCE_READ_BEFORE = 'force-read-before';

        CLASS_FORCE_READ_AFTER = 'force-read-after';

        DATA_ATTRIBUTE_REQUIRED_OF = 'data-attributerequiredof';

        DATA_ATTRIBUTE_RANGE_MIN_OF = 'data-attributevalueminof';

        DATA_ATTRIBUTE_RANGE_MAX_OF = 'data-attributevaluemaxof';

        DATA_ATTRIBUTE_AUTOCOMPLETE_OF = 'data-attributeautocompleteof';

        DATA_ATTRIBUTE_TITLE_OF = 'data-attributetitleof';

        DATA_ATTRIBUTE_ACCESSKEY_OF = 'data-attributeaccesskeyof';

        DATA_ATTRIBUTE_TARGET_OF = 'data-attributetargetof';

        DATA_ATTRIBUTE_DOWNLOAD_OF = 'data-attributedownloadof';

        DATA_ATTRIBUTE_LANGUAGE_OF = 'data-languageof';

        DATA_ATTRIBUTE_HEADERS_OF = 'data-headersof';

        DATA_ARIA_BUSY_OF = 'data-ariabusyof';

        DATA_ARIA_CHECKED_OF = 'data-ariacheckedof';

        DATA_ARIA_DROPEFFECT_OF = 'data-ariadropeffectof';

        DATA_ARIA_EXPANDED_OF = 'data-ariaexpandedof';

        DATA_ARIA_GRABBED_OF = 'data-ariagrabbedof';

        DATA_ARIA_HASPOPUP_OF = 'data-ariahaspopupof';

        DATA_ARIA_INVALID_OF = 'data-ariainvalidof';

        DATA_ARIA_LEVEL_OF = 'data-arialevelof';

        DATA_ARIA_ORIENTATION_OF = 'data-ariaorientationof';

        DATA_ARIA_PRESSED_OF = 'data-ariapressedof';

        DATA_ARIA_SELECTED_OF = 'data-ariaselectedof';

        DATA_ARIA_SORT_OF = 'data-ariasortof';

        DATA_ROLE_OF = 'data-roleof';

        DATA_INVALID_URL_OF = 'data-invalidurlof';

        DATA_INVALID_EMAIL_OF = 'data-invalidemailof';

        DATA_INVALID_RANGE_OF = 'data-invalidrangeof';

        DATA_INVALID_LENGTH_OF = 'data-invalidlengthof';

        DATA_INVALID_PATTERN_OF = 'data-invalidpatternof';

        DATA_INVALID_REQUIRED_OF = 'data-invalidrequiredof';

        DATA_INVALID_DATE_OF = 'data-invaliddateof';

        DATA_INVALID_TIME_OF = 'data-invalidtimeof';

        DATA_INVALID_DATETIME_OF = 'data-invaliddatetimeof';

        DATA_INVALID_MONTH_OF = 'data-invalidmonthof';

        DATA_INVALID_WEEK_OF = 'data-invalidweekof';

        DATA_INVALID_URL = 'data-invalidurl';

        DATA_INVALID_EMAIL = 'data-invalidemail';

        DATA_INVALID_RANGE = 'data-invalidrange';

        DATA_INVALID_LENGTH = 'data-invalidlength';

        DATA_INVALID_PATTERN = 'data-invalidpattern';

        DATA_INVALID_REQUIRED = 'data-invalidrequired';

        DATA_INVALID_DATE = 'data-invaliddate';

        DATA_INVALID_TIME = 'data-invalidtime';

        DATA_INVALID_DATETIME = 'data-invaliddatetime';

        DATA_INVALID_MONTH = 'data-invalidmonth';

        DATA_INVALID_WEEK = 'data-invalidweek';

        AccessibleDisplayScreenReaderImplementation.prototype._getShortcutPrefix = function (userAgent, defaultPrefix) {
            var chrome, firefox, ie, konqueror, mac, opera, safari, spoofer, windows;
            if (userAgent !== void 0) {
                userAgent = userAgent.toLowerCase();
                opera = userAgent.indexOf('opera') > -1;
                mac = userAgent.indexOf('mac') > -1;
                konqueror = userAgent.indexOf('konqueror') > -1;
                spoofer = userAgent.indexOf('spoofer') > -1;
                safari = userAgent.indexOf('applewebkit') > -1;
                windows = userAgent.indexOf('windows') > -1;
                chrome = userAgent.indexOf('chrome') > -1;
                firefox = /firefox\/[2-9]|minefield\/3/.test(userAgent);
                ie = (userAgent.indexOf('msie') > -1) || (userAgent.indexOf('trident') > -1);
                if (opera) {
                    return 'SHIFT + ESC';
                } else if (chrome && mac && (!spoofer)) {
                    return 'CTRL + OPTION';
                } else if (chrome || ie) {
                    return 'ALT';
                } else if (safari && (!windows) && (!spoofer)) {
                    return 'CTRL + ALT';
                } else if ((!windows) && (safari || mac || konqueror)) {
                    return 'CTRL';
                } else if (firefox) {
                    return 'ALT + SHIFT';
                }
            } else {
                return defaultPrefix;
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype._getRoleDescription = function (role) {
            var parameter;
            parameter = "role-" + (role.toLowerCase());
            if (this.configure.hasParameter(parameter)) {
                return this.configure.getParameter(parameter);
            } else {
                return null;
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype._getLanguageDescription = function (languageCode) {
            var language, parameter;
            language = languageCode.toLowerCase();
            parameter = "language-" + language;
            if (this.configure.hasParameter(parameter)) {
                return this.configure.getParameter(parameter);
            } else if (language.indexOf('-') > -1) {
                parameter = 'language-' + language.split('-')[0];
                if (this.configure.hasParameter(parameter)) {
                    return this.configure.getParameter(parameter);
                }
            }
            return null;
        };

        AccessibleDisplayScreenReaderImplementation.prototype._getDescription = function (element) {
            var description, descriptionId, descriptionIds, elementDescription, i, len, type;
            description = null;
            if (element.hasAttribute('title')) {
                description = element.getAttribute('title');
            } else if (element.hasAttribute('aria-label')) {
                description = element.getAttribute('aria-label');
            } else if (element.hasAttribute('alt')) {
                description = element.getAttribute('alt');
            } else if (element.hasAttribute('label')) {
                description = element.getAttribute('label');
            } else if (element.hasAttribute('aria-labelledby') || element.hasAttribute('aria-describedby')) {
                if (element.hasAttribute('aria-labelledby')) {
                    descriptionIds = element.getAttribute('aria-labelledby').split(new RegExp('[ \n\t\r]+'));
                } else {
                    descriptionIds = element.getAttribute('aria-describedby').split(new RegExp('[ \n\t\r]+'));
                }
                for (i = 0, len = descriptionIds.length; i < len; i++) {
                    descriptionId = descriptionIds[i];
                    elementDescription = this.parser.find("#" + descriptionId).firstResult();
                    if (elementDescription !== null) {
                        description = elementDescription.getTextContent();
                        break;
                    }
                }
            } else if ((element.getTagName() === 'INPUT') && (element.hasAttribute('type'))) {
                type = element.getAttribute('type').toLowerCase();
                if (((type === 'button') || (type === 'submit') || (type === 'reset')) && (element.hasAttribute('value'))) {
                    description = element.getAttribute('value');
                }
            }
            if (description === null) {
                description = element.getTextContent();
            }
            return description.replace(new RegExp('[ \n\t\r]+', 'g'), ' ');
        };

        AccessibleDisplayScreenReaderImplementation.prototype._generateListShortcuts = function () {
            var containerAfter, containerBefore, local, textContainer;
            local = this.parser.find('body').firstResult();
            if (local !== null) {
                containerBefore = this.parser.find("#" + ID_CONTAINER_SHORTCUTS_BEFORE).firstResult();
                if ((containerBefore === null) && (this.attributeAccesskeyBefore.length > 0)) {
                    containerBefore = this.parser.createElement('div');
                    containerBefore.setAttribute('id', ID_CONTAINER_SHORTCUTS_BEFORE);
                    textContainer = this.parser.createElement('span');
                    textContainer.setAttribute('class', CLASS_TEXT_SHORTCUTS);
                    textContainer.appendText(this.attributeAccesskeyBefore);
                    containerBefore.appendElement(textContainer);
                    local.prependElement(containerBefore);
                }
                if (containerBefore !== null) {
                    this.listShortcutsBefore = this.parser.find(containerBefore).findChildren('ul').firstResult();
                    if (this.listShortcutsBefore === null) {
                        this.listShortcutsBefore = this.parser.createElement('ul');
                        containerBefore.appendElement(this.listShortcutsBefore);
                    }
                }
                containerAfter = this.parser.find("#" + ID_CONTAINER_SHORTCUTS_AFTER).firstResult();
                if ((containerAfter === null) && (this.attributeAccesskeyAfter.length > 0)) {
                    containerAfter = this.parser.createElement('div');
                    containerAfter.setAttribute('id', ID_CONTAINER_SHORTCUTS_AFTER);
                    textContainer = this.parser.createElement('span');
                    textContainer.setAttribute('class', CLASS_TEXT_SHORTCUTS);
                    textContainer.appendText(this.attributeAccesskeyAfter);
                    containerAfter.appendElement(textContainer);
                    local.appendElement(containerAfter);
                }
                if (containerAfter !== null) {
                    this.listShortcutsAfter = this.parser.find(containerAfter).findChildren('ul').firstResult();
                    if (this.listShortcutsAfter === null) {
                        this.listShortcutsAfter = this.parser.createElement('ul');
                        containerAfter.appendElement(this.listShortcutsAfter);
                    }
                }
            }
            this.listShortcutsAdded = true;
        };

        AccessibleDisplayScreenReaderImplementation.prototype._insert = function (element, insertedElement, before) {
            var appendTags, body, controls, i, label, labels, len, tagName;
            tagName = element.getTagName();
            appendTags = ['BODY', 'A', 'FIGCAPTION', 'LI', 'DT', 'DD', 'LABEL', 'OPTION', 'TD', 'TH'];
            controls = ['INPUT', 'SELECT', 'TEXTAREA'];
            if (tagName === 'HTML') {
                body = this.parser.find('body').firstResult();
                if (body !== null) {
                    this._insert(body, insertedElement, before);
                }
            } else if (appendTags.indexOf(tagName) > -1) {
                if (before) {
                    element.prependElement(insertedElement);
                } else {
                    element.appendElement(insertedElement);
                }
            } else if (controls.indexOf(tagName) > -1) {
                if (element.hasAttribute('id')) {
                    labels = this.parser.find("label[for=\"" + (element.getAttribute('id')) + "\"]").listResults();
                }
                if (labels.length === 0) {
                    labels = this.parser.find(element).findAncestors('label').listResults();
                }
                for (i = 0, len = labels.length; i < len; i++) {
                    label = labels[i];
                    this._insert(label, insertedElement, before);
                }
            } else if (before) {
                element.insertBefore(insertedElement);
            } else {
                element.insertAfter(insertedElement);
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype._forceReadSimple = function (element, textBefore, textAfter, dataOf) {
            var i, identifier, len, newReferences, reference, referenceAfter, referenceBefore, references, selector, span;
            this.idGenerator.generateId(element);
            identifier = element.getAttribute('id');
            selector = "[" + dataOf + "=\"" + identifier + "\"]";
            referenceBefore = this.parser.find("." + CLASS_FORCE_READ_BEFORE + selector).firstResult();
            referenceAfter = this.parser.find("." + CLASS_FORCE_READ_AFTER + selector).firstResult();
            references = this.parser.find(selector).listResults();
            newReferences = [];
            for (i = 0, len = references.length; i < len; i++) {
                reference = references[i];
                if ((!reference.equals(referenceBefore)) && (!reference.equals(referenceAfter))) {
                    newReferences.push(reference);
                }
            }
            if (newReferences.length === 0) {
                if (textBefore.length > 0) {
                    if (!element.equals(referenceBefore)) {
                        if (referenceBefore !== null) {
                            referenceBefore.removeNode();
                        }
                        span = this.parser.createElement('span');
                        span.setAttribute('class', CLASS_FORCE_READ_BEFORE);
                        span.setAttribute(dataOf, identifier);
                        span.appendText(textBefore);
                        this._insert(element, span, true);
                    }
                }
                if (textAfter.length > 0) {
                    if (!element.equals(referenceAfter)) {
                        if (referenceAfter !== null) {
                            referenceAfter.removeNode();
                        }
                        span = this.parser.createElement('span');
                        span.setAttribute('class', CLASS_FORCE_READ_AFTER);
                        span.setAttribute(dataOf, identifier);
                        span.appendText(textAfter);
                        this._insert(element, span, false);
                    }
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype._forceRead = function (element, value, tpb, tsb, tpa, tsa, dataOf) {
            var textAfter, textBefore;
            if ((tpb.length > 0) || (tsb.length > 0)) {
                textBefore = "" + tpb + value + tsb;
            } else {
                textBefore = '';
            }
            if ((tpa.length > 0) || (tsa.length > 0)) {
                textAfter = "" + tpa + value + tsa;
            } else {
                textAfter = '';
            }
            this._forceReadSimple(element, textBefore, textAfter, dataOf);
        };

        function AccessibleDisplayScreenReaderImplementation(parser, configure, userAgent) {
            this.parser = parser;
            this.configure = configure;
            this.listShortcutsAdded = false;
            this.listShortcutsBefore = null;
            this.listShortcutsAfter = null;
            this.idGenerator = new hatemile.util.IDGenerator('display');
            this.attributeTitlePrefixBefore = this.configure.getParameter('attribute-title-prefix-before');
            this.attributeTitleSuffixBefore = this.configure.getParameter('attribute-title-suffix-before');
            this.attributeTitlePrefixAfter = this.configure.getParameter('attribute-title-prefix-after');
            this.attributeTitleSuffixAfter = this.configure.getParameter('attribute-title-suffix-after');
            this.attributeAccesskeyDefault = this.configure.getParameter('attribute-accesskey-default');
            this.attributeAccesskeyBefore = this.configure.getParameter('attribute-accesskey-before');
            this.attributeAccesskeyAfter = this.configure.getParameter('attribute-accesskey-after');
            this.attributeAccesskeyPrefixBefore = this.configure.getParameter('attribute-accesskey-prefix-before');
            this.attributeAccesskeySuffixBefore = this.configure.getParameter('attribute-accesskey-suffix-before');
            this.attributeAccesskeyPrefixAfter = this.configure.getParameter('attribute-accesskey-prefix-after');
            this.attributeAccesskeySuffixAfter = this.configure.getParameter('attribute-accesskey-suffix-after');
            this.attributeTargetBlankBefore = this.configure.getParameter('attribute-target-blank-before');
            this.attributeTargetBlankAfter = this.configure.getParameter('attribute-target-blank-after');
            this.attributeDownloadBefore = this.configure.getParameter('attribute-download-before');
            this.attributeDownloadAfter = this.configure.getParameter('attribute-download-after');
            this.attributeHeadersPrefixBefore = this.configure.getParameter('attribute-headers-prefix-before');
            this.attributeHeadersSuffixBefore = this.configure.getParameter('attribute-headers-suffix-before');
            this.attributeHeadersPrefixAfter = this.configure.getParameter('attribute-headers-prefix-after');
            this.attributeHeadersSuffixAfter = this.configure.getParameter('attribute-headers-suffix-after');
            this.attributeLanguagePrefixBefore = this.configure.getParameter('attribute-language-prefix-before');
            this.attributeLanguageSuffixBefore = this.configure.getParameter('attribute-language-suffix-before');
            this.attributeLanguagePrefixAfter = this.configure.getParameter('attribute-language-prefix-after');
            this.attributeLanguageSuffixAfter = this.configure.getParameter('attribute-language-suffix-after');
            this.attributeRolePrefixBefore = this.configure.getParameter('attribute-role-prefix-before');
            this.attributeRoleSuffixBefore = this.configure.getParameter('attribute-role-suffix-before');
            this.attributeRolePrefixAfter = this.configure.getParameter('attribute-role-prefix-after');
            this.attributeRoleSuffixAfter = this.configure.getParameter('attribute-role-suffix-after');
            this.ariaAutoCompleteBothBefore = this.configure.getParameter('aria-autocomplete-both-before');
            this.ariaAutoCompleteBothAfter = this.configure.getParameter('aria-autocomplete-both-after');
            this.ariaAutoCompleteInlineBefore = this.configure.getParameter('aria-autocomplete-inline-before');
            this.ariaAutoCompleteInlineAfter = this.configure.getParameter('aria-autocomplete-inline-after');
            this.ariaAutoCompleteListBefore = this.configure.getParameter('aria-autocomplete-list-before');
            this.ariaAutoCompleteListAfter = this.configure.getParameter('aria-autocomplete-list-after');
            this.ariaBusyTrueBefore = this.configure.getParameter('aria-busy-true-before');
            this.ariaBusyTrueAfter = this.configure.getParameter('aria-busy-true-after');
            this.ariaCheckedFalseBefore = this.configure.getParameter('aria-checked-false-before');
            this.ariaCheckedFalseAfter = this.configure.getParameter('aria-checked-false-after');
            this.ariaCheckedMixedBefore = this.configure.getParameter('aria-checked-mixed-before');
            this.ariaCheckedMixedAfter = this.configure.getParameter('aria-checked-mixed-after');
            this.ariaCheckedTrueBefore = this.configure.getParameter('aria-checked-true-before');
            this.ariaCheckedTrueAfter = this.configure.getParameter('aria-checked-true-after');
            this.ariaDropeffectCopyBefore = this.configure.getParameter('aria-dropeffect-copy-before');
            this.ariaDropeffectCopyAfter = this.configure.getParameter('aria-dropeffect-copy-after');
            this.ariaDropeffectExecuteBefore = this.configure.getParameter('aria-dropeffect-execute-before');
            this.ariaDropeffectExecuteAfter = this.configure.getParameter('aria-dropeffect-execute-after');
            this.ariaDropeffectLinkBefore = this.configure.getParameter('aria-dropeffect-link-before');
            this.ariaDropeffectLinkAfter = this.configure.getParameter('aria-dropeffect-link-after');
            this.ariaDropeffectMoveBefore = this.configure.getParameter('aria-dropeffect-move-before');
            this.ariaDropeffectMoveAfter = this.configure.getParameter('aria-dropeffect-move-after');
            this.ariaDropeffectPopupBefore = this.configure.getParameter('aria-dropeffect-popup-before');
            this.ariaDropeffectPopupAfter = this.configure.getParameter('aria-dropeffect-popup-after');
            this.ariaExpandedFalseBefore = this.configure.getParameter('aria-expanded-false-before');
            this.ariaExpandedFalseAfter = this.configure.getParameter('aria-expanded-false-after');
            this.ariaExpandedTrueBefore = this.configure.getParameter('aria-expanded-true-before');
            this.ariaExpandedTrueAfter = this.configure.getParameter('aria-expanded-true-after');
            this.ariaGrabbedFalseBefore = this.configure.getParameter('aria-grabbed-false-before');
            this.ariaGrabbedFalseAfter = this.configure.getParameter('aria-grabbed-false-after');
            this.ariaGrabbedTrueBefore = this.configure.getParameter('aria-grabbed-true-before');
            this.ariaGrabbedTrueAfter = this.configure.getParameter('aria-grabbed-true-after');
            this.ariaHaspopupTrueBefore = this.configure.getParameter('aria-haspopup-true-before');
            this.ariaHaspopupTrueAfter = this.configure.getParameter('aria-haspopup-true-after');
            this.ariaInvalidTrueBefore = this.configure.getParameter('aria-invalid-true-before');
            this.ariaInvalidTrueAfter = this.configure.getParameter('aria-invalid-true-after');
            this.ariaLevelPrefixBefore = this.configure.getParameter('aria-level-prefix-before');
            this.ariaLevelSuffixBefore = this.configure.getParameter('aria-level-suffix-before');
            this.ariaLevelPrefixAfter = this.configure.getParameter('aria-level-prefix-after');
            this.ariaLevelSuffixAfter = this.configure.getParameter('aria-level-suffix-after');
            this.ariaValueMaximumPrefixBefore = this.configure.getParameter('aria-value-maximum-prefix-before');
            this.ariaValueMaximumSuffixBefore = this.configure.getParameter('aria-value-maximum-suffix-before');
            this.ariaValueMaximumPrefixAfter = this.configure.getParameter('aria-value-maximum-prefix-after');
            this.ariaValueMaximumSuffixAfter = this.configure.getParameter('aria-value-maximum-suffix-after');
            this.ariaValueMinimumPrefixBefore = this.configure.getParameter('aria-value-minimum-prefix-before');
            this.ariaValueMinimumSuffixBefore = this.configure.getParameter('aria-value-minimum-suffix-before');
            this.ariaValueMinimumPrefixAfter = this.configure.getParameter('aria-value-minimum-prefix-after');
            this.ariaValueMinimumSuffixAfter = this.configure.getParameter('aria-value-minimum-suffix-after');
            this.ariaOrientationHorizontalBefore = this.configure.getParameter('aria-orientation-horizontal-before');
            this.ariaOrientationHorizontalAfter = this.configure.getParameter('aria-orientation-horizontal-after');
            this.ariaOrientationVerticalBefore = this.configure.getParameter('aria-orientation-vertical-before');
            this.ariaOrientationVerticalAfter = this.configure.getParameter('aria-orientation-vertical-after');
            this.ariaPressedFalseBefore = this.configure.getParameter('aria-pressed-false-before');
            this.ariaPressedFalseAfter = this.configure.getParameter('aria-pressed-false-after');
            this.ariaPressedMixedBefore = this.configure.getParameter('aria-pressed-mixed-before');
            this.ariaPressedMixedAfter = this.configure.getParameter('aria-pressed-mixed-after');
            this.ariaPressedTrueBefore = this.configure.getParameter('aria-pressed-true-before');
            this.ariaPressedTrueAfter = this.configure.getParameter('aria-pressed-true-after');
            this.ariaRequiredTrueBefore = this.configure.getParameter('aria-required-true-before');
            this.ariaRequiredTrueAfter = this.configure.getParameter('aria-required-true-after');
            this.ariaSelectedFalseBefore = this.configure.getParameter('aria-selected-false-before');
            this.ariaSelectedFalseAfter = this.configure.getParameter('aria-selected-false-after');
            this.ariaSelectedTrueBefore = this.configure.getParameter('aria-selected-true-before');
            this.ariaSelectedTrueAfter = this.configure.getParameter('aria-selected-true-after');
            this.ariaSortAscendingBefore = this.configure.getParameter('aria-sort-ascending-before');
            this.ariaSortAscendingAfter = this.configure.getParameter('aria-sort-ascending-after');
            this.ariaSortDescendingBefore = this.configure.getParameter('aria-sort-descending-before');
            this.ariaSortDescendingAfter = this.configure.getParameter('aria-sort-descending-after');
            this.ariaSortOtherBefore = this.configure.getParameter('aria-sort-other-before');
            this.ariaSortOtherAfter = this.configure.getParameter('aria-sort-other-after');
            this.dataInvalidUrlBefore = this.configure.getParameter('attribute-data-invalid-url-before');
            this.dataInvalidUrlAfter = this.configure.getParameter('attribute-data-invalid-url-after');
            this.dataInvalidEmailBefore = this.configure.getParameter('attribute-data-invalid-email-before');
            this.dataInvalidEmailAfter = this.configure.getParameter('attribute-data-invalid-email-after');
            this.dataInvalidRangeBefore = this.configure.getParameter('attribute-data-invalid-range-before');
            this.dataInvalidRangeAfter = this.configure.getParameter('attribute-data-invalid-range-after');
            this.dataInvalidLengthBefore = this.configure.getParameter('attribute-data-invalid-length-before');
            this.dataInvalidLengthAfter = this.configure.getParameter('attribute-data-invalid-length-after');
            this.dataInvalidPatternBefore = this.configure.getParameter('attribute-data-invalid-pattern-before');
            this.dataInvalidPatternAfter = this.configure.getParameter('attribute-data-invalid-pattern-after');
            this.dataInvalidRequiredBefore = this.configure.getParameter('attribute-data-invalid-required-before');
            this.dataInvalidRequiredAfter = this.configure.getParameter('attribute-data-invalid-required-after');
            this.dataInvalidDateBefore = this.configure.getParameter('attribute-data-invalid-date-before');
            this.dataInvalidDateAfter = this.configure.getParameter('attribute-data-invalid-date-after');
            this.dataInvalidTimeBefore = this.configure.getParameter('attribute-data-invalid-time-before');
            this.dataInvalidTimeAfter = this.configure.getParameter('attribute-data-invalid-time-after');
            this.dataInvalidDateTimeBefore = this.configure.getParameter('attribute-data-invalid-datetime-before');
            this.dataInvalidDateTimeAfter = this.configure.getParameter('attribute-data-invalid-datetime-after');
            this.dataInvalidMonthBefore = this.configure.getParameter('attribute-data-invalid-month-before');
            this.dataInvalidMonthAfter = this.configure.getParameter('attribute-data-invalid-month-after');
            this.dataInvalidWeekBefore = this.configure.getParameter('attribute-data-invalid-week-before');
            this.dataInvalidWeekAfter = this.configure.getParameter('attribute-data-invalid-week-after');
            this.shortcutPrefix = this._getShortcutPrefix(userAgent, this.attributeAccesskeyDefault);
        }

        AccessibleDisplayScreenReaderImplementation.prototype.displayShortcut = function (element) {
            var description, i, item, key, keys, len, selector, shortcut;
            if (element.hasAttribute('accesskey')) {
                description = this._getDescription(element);
                if (!element.hasAttribute('title')) {
                    this.idGenerator.generateId(element);
                    element.setAttribute(DATA_ATTRIBUTE_TITLE_OF, element.getAttribute('id'));
                    element.setAttribute('title', description);
                }
                if (!this.listShortcutsAdded) {
                    this._generateListShortcuts();
                }
                keys = element.getAttribute('accesskey').split(new RegExp('[ \n\t\r]+'));
                for (i = 0, len = keys.length; i < len; i++) {
                    key = keys[i];
                    key = key.toUpperCase();
                    selector = "[" + DATA_ATTRIBUTE_ACCESSKEY_OF + "=\"" + key + "\"]";
                    shortcut = this.shortcutPrefix + " + " + key;
                    this._forceRead(element, shortcut, this.attributeAccesskeyPrefixBefore, this.attributeAccesskeySuffixBefore, this.attributeAccesskeyPrefixAfter, this.attributeAccesskeySuffixAfter, DATA_ATTRIBUTE_ACCESSKEY_OF, DATA_ATTRIBUTE_ACCESSKEY_OF);
                    item = this.parser.createElement('li');
                    item.setAttribute(DATA_ATTRIBUTE_ACCESSKEY_OF, key);
                    item.appendText(shortcut + ": " + description);
                    if ((this.listShortcutsBefore !== null) && (this.parser.find(this.listShortcutsBefore).findChildren("[" + DATA_ATTRIBUTE_ACCESSKEY_OF + "=\"" + key + "\"]").firstResult() === null)) {
                        this.listShortcutsBefore.appendElement(item.cloneElement());
                    }
                    if ((this.listShortcutsAfter !== null) && (this.parser.find(this.listShortcutsAfter).findChildren("[" + DATA_ATTRIBUTE_ACCESSKEY_OF + "=\"" + key + "\"]").firstResult() === null)) {
                        this.listShortcutsAfter.appendElement(item.cloneElement());
                    }
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayAllShortcuts = function () {
            var element, elements, i, len;
            elements = this.parser.find('[accesskey]').listResults();
            for (i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                if (self.hatemile.util.CommonFunctions.isValidElement(element)) {
                    this.displayShortcut(element);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayRole = function (element) {
            var role, roleDescription;
            if (element.hasAttribute('role')) {
                role = element.getAttribute('role');
                roleDescription = this._getRoleDescription(role);
                if (roleDescription !== null) {
                    this._forceRead(element, roleDescription, this.attributeRolePrefixBefore, this.attributeRoleSuffixBefore, this.attributeRolePrefixAfter, this.attributeRoleSuffixAfter, DATA_ROLE_OF);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayAllRoles = function () {
            var element, elements, i, len;
            elements = this.parser.find('[role]').listResults();
            for (i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                if (self.hatemile.util.CommonFunctions.isValidElement(element)) {
                    this.displayRole(element);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayCellHeader = function (tableCell) {
            var header, i, idHeader, idsHeaders, len, textHeader;
            if (tableCell.hasAttribute('headers')) {
                textHeader = null;
                idsHeaders = tableCell.getAttribute('headers').split(new RegExp('[ \n\t\r]+'));
                for (i = 0, len = idsHeaders.length; i < len; i++) {
                    idHeader = idsHeaders[i];
                    header = this.parser.find("#" + idHeader).firstResult();
                    if (header !== null) {
                        if (textHeader === null) {
                            textHeader = header.getTextContent();
                        } else {
                            textHeader = textHeader + " " + (header.getTextContent());
                        }
                    }
                }
                if ((textHeader !== null) && (textHeader.length > 0)) {
                    this._forceRead(tableCell, textHeader, this.attributeHeadersPrefixBefore, this.attributeHeadersSuffixBefore, this.attributeHeadersPrefixAfter, this.attributeHeadersSuffixAfter, DATA_ATTRIBUTE_HEADERS_OF);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayAllCellHeaders = function () {
            var element, elements, i, len;
            elements = this.parser.find('td[headers],th[headers]').listResults();
            for (i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                if (self.hatemile.util.CommonFunctions.isValidElement(element)) {
                    this.displayCellHeader(element);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayWAIARIAStates = function (element) {
            var attributeValue;
            if ((element.hasAttribute('aria-busy')) && (element.getAttribute('aria-busy') === 'true')) {
                this._forceReadSimple(element, this.ariaBusyTrueBefore, this.ariaBusyTrueAfter, DATA_ARIA_BUSY_OF);
            }
            if (element.hasAttribute('aria-checked')) {
                attributeValue = element.getAttribute('aria-checked');
                if (attributeValue === 'true') {
                    this._forceReadSimple(element, this.ariaCheckedTrueBefore, this.ariaCheckedTrueAfter, DATA_ARIA_CHECKED_OF);
                } else if (attributeValue === 'false') {
                    this._forceReadSimple(element, this.ariaCheckedFalseBefore, this.ariaCheckedFalseAfter, DATA_ARIA_CHECKED_OF);
                } else if (attributeValue === 'mixed') {
                    this._forceReadSimple(element, this.ariaCheckedMixedBefore, this.ariaCheckedMixedAfter, DATA_ARIA_CHECKED_OF);
                }
            }
            if (element.hasAttribute('aria-expanded')) {
                attributeValue = element.getAttribute('aria-expanded');
                if (attributeValue === 'true') {
                    this._forceReadSimple(element, this.ariaExpandedTrueBefore, this.ariaExpandedTrueAfter, DATA_ARIA_EXPANDED_OF);
                } else if (attributeValue === 'false') {
                    this._forceReadSimple(element, this.ariaExpandedFalseBefore, this.ariaExpandedFalseAfter, DATA_ARIA_EXPANDED_OF);
                }
            }
            if ((element.hasAttribute('aria-haspopup')) && (element.getAttribute('aria-haspopup') === 'true')) {
                this._forceReadSimple(element, this.ariaHaspopupTrueBefore, this.ariaHaspopupTrueAfter, DATA_ARIA_HASPOPUP_OF);
            }
            if ((element.hasAttribute('aria-invalid')) && (element.getAttribute('aria-invalid') === 'true')) {
                this._forceReadSimple(element, this.ariaInvalidTrueBefore, this.ariaInvalidTrueAfter, DATA_ARIA_INVALID_OF);
                if (element.hasAttribute(DATA_INVALID_LENGTH)) {
                    this._forceReadSimple(element, this.dataInvalidLengthBefore, this.dataInvalidLengthAfter, DATA_INVALID_LENGTH_OF);
                }
                if (element.hasAttribute(DATA_INVALID_PATTERN)) {
                    this._forceReadSimple(element, this.dataInvalidPatternBefore, this.dataInvalidPatternAfter, DATA_INVALID_PATTERN_OF);
                }
                if (element.hasAttribute(DATA_INVALID_REQUIRED)) {
                    this._forceReadSimple(element, this.dataInvalidRequiredBefore, this.dataInvalidRequiredAfter, DATA_INVALID_REQUIRED_OF);
                }
                if (element.hasAttribute(DATA_INVALID_URL)) {
                    this._forceReadSimple(element, this.dataInvalidUrlBefore, this.dataInvalidUrlAfter, DATA_INVALID_URL_OF);
                } else if (element.hasAttribute(DATA_INVALID_EMAIL)) {
                    this._forceReadSimple(element, this.dataInvalidEmailBefore, this.dataInvalidEmailAfter, DATA_INVALID_EMAIL_OF);
                } else if (element.hasAttribute(DATA_INVALID_RANGE)) {
                    this._forceReadSimple(element, this.dataInvalidRangeBefore, this.dataInvalidRangeAfter, DATA_INVALID_RANGE_OF);
                } else if (element.hasAttribute(DATA_INVALID_DATE)) {
                    this._forceReadSimple(element, this.dataInvalidDateBefore, this.dataInvalidDateAfter, DATA_INVALID_DATE_OF);
                } else if (element.hasAttribute(DATA_INVALID_TIME)) {
                    this._forceReadSimple(element, this.dataInvalidTimeBefore, this.dataInvalidTimeAfter, DATA_INVALID_TIME_OF);
                } else if (element.hasAttribute(DATA_INVALID_DATETIME)) {
                    this._forceReadSimple(element, this.dataInvalidDateTimeBefore, this.dataInvalidDateTimeAfter, DATA_INVALID_DATETIME_OF);
                } else if (element.hasAttribute(DATA_INVALID_MONTH)) {
                    this._forceReadSimple(element, this.dataInvalidMonthBefore, this.dataInvalidMonthAfter, DATA_INVALID_MONTH_OF);
                } else if (element.hasAttribute(DATA_INVALID_WEEK)) {
                    this._forceReadSimple(element, this.dataInvalidWeekBefore, this.dataInvalidWeekAfter, DATA_INVALID_WEEK_OF);
                }
            }
            if (element.hasAttribute('aria-level')) {
                this._forceRead(element, element.getAttribute('aria-level'), this.ariaLevelPrefixBefore, this.ariaLevelSuffixBefore, this.ariaLevelPrefixAfter, this.ariaLevelSuffixAfter, DATA_ARIA_LEVEL_OF);
            }
            if (element.hasAttribute('aria-orientation')) {
                attributeValue = element.getAttribute('aria-orientation');
                if (attributeValue === 'vertical') {
                    this._forceReadSimple(element, this.ariaOrientationVerticalBefore, this.ariaOrientationVerticalAfter, DATA_ARIA_ORIENTATION_OF);
                } else if (attributeValue === 'horizontal') {
                    this._forceReadSimple(element, this.ariaOrientationHorizontalBefore, this.ariaOrientationHorizontalAfter, DATA_ARIA_ORIENTATION_OF);
                }
            }
            if (element.hasAttribute('aria-pressed')) {
                attributeValue = element.getAttribute('aria-pressed');
                if (attributeValue === 'true') {
                    this._forceReadSimple(element, this.ariaPressedTrueBefore, this.ariaPressedTrueAfter, DATA_ARIA_PRESSED_OF);
                } else if (attributeValue === 'false') {
                    this._forceReadSimple(element, this.ariaPressedFalseBefore, this.ariaPressedFalseAfter, DATA_ARIA_PRESSED_OF);
                } else if (attributeValue === 'mixed') {
                    this._forceReadSimple(element, this.ariaPressedMixedBefore, this.ariaPressedMixedAfter, DATA_ARIA_PRESSED_OF);
                }
            }
            if (element.hasAttribute('aria-selected')) {
                attributeValue = element.getAttribute('aria-selected');
                if (attributeValue === 'true') {
                    this._forceReadSimple(element, this.ariaSelectedTrueBefore, this.ariaSelectedTrueAfter, DATA_ARIA_SELECTED_OF);
                } else if (attributeValue === 'false') {
                    this._forceReadSimple(element, this.ariaSelectedFalseBefore, this.ariaSelectedFalseAfter, DATA_ARIA_SELECTED_OF);
                }
            }
            if (element.hasAttribute('aria-sort')) {
                attributeValue = element.getAttribute('aria-sort');
                if (attributeValue === 'ascending') {
                    this._forceReadSimple(element, this.ariaSortAscendingBefore, this.ariaSortAscendingAfter, DATA_ARIA_SORT_OF);
                } else if (attributeValue === 'descending') {
                    this._forceReadSimple(element, this.ariaSortDescendingBefore, this.ariaSortDescendingAfter, DATA_ARIA_SORT_OF);
                } else if (attributeValue === 'other') {
                    this._forceReadSimple(element, this.ariaSortOtherBefore, this.ariaSortOtherAfter, DATA_ARIA_SORT_OF);
                }
            }
            if ((element.hasAttribute('aria-required')) && (element.getAttribute('aria-required') === 'true')) {
                this._forceReadSimple(element, this.ariaRequiredTrueBefore, this.ariaRequiredTrueAfter, DATA_ATTRIBUTE_REQUIRED_OF);
            }
            if (element.hasAttribute('aria-valuemin')) {
                this._forceRead(element, element.getAttribute('aria-valuemin'), this.ariaValueMinimumPrefixBefore, this.ariaValueMinimumSuffixBefore, this.ariaValueMinimumPrefixAfter, this.ariaValueMinimumSuffixAfter, DATA_ATTRIBUTE_RANGE_MIN_OF);
            }
            if (element.hasAttribute('aria-valuemax')) {
                this._forceRead(element, element.getAttribute('aria-valuemax'), this.ariaValueMaximumPrefixBefore, this.ariaValueMaximumSuffixBefore, this.ariaValueMaximumPrefixAfter, this.ariaValueMaximumSuffixAfter, DATA_ATTRIBUTE_RANGE_MAX_OF);
            }
            if (element.hasAttribute('aria-autocomplete')) {
                attributeValue = element.getAttribute('aria-autocomplete');
                if (attributeValue === 'both') {
                    this._forceReadSimple(element, this.ariaAutoCompleteBothBefore, this.ariaAutoCompleteBothAfter, DATA_ATTRIBUTE_AUTOCOMPLETE_OF);
                } else if (attributeValue === 'inline') {
                    this._forceReadSimple(element, this.ariaAutoCompleteListBefore, this.ariaAutoCompleteListAfter, DATA_ATTRIBUTE_AUTOCOMPLETE_OF);
                } else if (attributeValue === 'list') {
                    this._forceReadSimple(element, this.ariaAutoCompleteInlineBefore, this.ariaAutoCompleteInlineAfter, DATA_ATTRIBUTE_AUTOCOMPLETE_OF);
                }
            }
            if (element.hasAttribute('aria-dropeffect')) {
                attributeValue = element.getAttribute('aria-dropeffect');
                if (attributeValue === 'copy') {
                    this._forceReadSimple(element, this.ariaDropeffectCopyBefore, this.ariaDropeffectCopyAfter, DATA_ARIA_DROPEFFECT_OF);
                } else if (attributeValue === 'move') {
                    this._forceReadSimple(element, this.ariaDropeffectMoveBefore, this.ariaDropeffectMoveAfter, DATA_ARIA_DROPEFFECT_OF);
                } else if (attributeValue === 'link') {
                    this._forceReadSimple(element, this.ariaDropeffectLinkBefore, this.ariaDropeffectLinkAfter, DATA_ARIA_DROPEFFECT_OF);
                } else if (attributeValue === 'execute') {
                    this._forceReadSimple(element, this.ariaDropeffectExecuteBefore, this.ariaDropeffectExecuteAfter, DATA_ARIA_DROPEFFECT_OF);
                } else if (attributeValue === 'popup') {
                    this._forceReadSimple(element, this.ariaDropeffectPopupBefore, this.ariaDropeffectPopupAfter, DATA_ARIA_DROPEFFECT_OF);
                }
            }
            if (element.hasAttribute('aria-grabbed')) {
                attributeValue = element.getAttribute('aria-grabbed');
                if (attributeValue === 'true') {
                    this._forceReadSimple(element, this.ariaGrabbedTrueBefore, this.ariaGrabbedTrueAfter, DATA_ARIA_GRABBED_OF);
                } else if (attributeValue === 'false') {
                    this._forceReadSimple(element, this.ariaGrabbedFalseBefore, this.ariaGrabbedFalseAfter, DATA_ARIA_GRABBED_OF);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayAllWAIARIAStates = function () {
            var element, elements, i, len;
            elements = this.parser.find('[aria-busy="true"],[aria-checked],' + '[aria-dropeffect],[aria-expanded],[aria-grabbed],[aria-haspopup],' + '[aria-invalid=true],[aria-level],[aria-orientation],' + '[aria-pressed],[aria-selected],[aria-sort],[aria-required="true"],' + '[aria-valuemin],[aria-valuemax],[aria-autocomplete]').listResults();
            for (i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                if (self.hatemile.util.CommonFunctions.isValidElement(element)) {
                    this.displayWAIARIAStates(element);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayLinkAttributes = function (link) {
            if (link.hasAttribute('download')) {
                this._forceReadSimple(link, this.attributeDownloadBefore, this.attributeDownloadAfter, DATA_ATTRIBUTE_DOWNLOAD_OF);
            }
            if ((link.hasAttribute('target')) && (link.getAttribute('target') === '_blank')) {
                this._forceReadSimple(link, this.attributeTargetBlankBefore, this.attributeTargetBlankAfter, DATA_ATTRIBUTE_TARGET_OF);
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayAllLinksAttributes = function () {
            var element, elements, i, len;
            elements = this.parser.find('a[download],a[target="_blank"]').listResults();
            for (i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                if (self.hatemile.util.CommonFunctions.isValidElement(element)) {
                    this.displayLinkAttributes(element);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayTitle = function (element) {
            if ((element.hasAttribute('title')) && (element.getAttribute('title').length > 0)) {
                if (element.getTagName() === 'IMG') {
                    this.displayAlternativeTextImage(element);
                } else {
                    this._forceRead(element, element.getAttribute('title'), this.attributeTitlePrefixBefore, this.attributeTitleSuffixBefore, this.attributeTitlePrefixAfter, this.attributeTitleSuffixAfter, DATA_ATTRIBUTE_TITLE_OF);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayAllTitles = function () {
            var element, elements, i, len;
            elements = this.parser.find('body [title]').listResults();
            for (i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                if (self.hatemile.util.CommonFunctions.isValidElement(element)) {
                    this.displayTitle(element);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayLanguage = function (element) {
            var language, languageCode;
            languageCode = null;
            if (element.hasAttribute('lang')) {
                languageCode = element.getAttribute('lang');
            } else if (element.hasAttribute('hreflang')) {
                languageCode = element.getAttribute('hreflang');
            }
            if (languageCode !== null) {
                language = this._getLanguageDescription(languageCode);
                if (language !== null) {
                    this._forceRead(element, language, this.attributeLanguagePrefixBefore, this.attributeLanguageSuffixBefore, this.attributeLanguagePrefixAfter, this.attributeLanguageSuffixAfter, DATA_ATTRIBUTE_LANGUAGE_OF);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayAllLanguages = function () {
            var element, elements, i, len;
            elements = this.parser.find('html[lang],body[lang],body [lang],body [hreflang]').listResults();
            for (i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                if (self.hatemile.util.CommonFunctions.isValidElement(element)) {
                    this.displayLanguage(element);
                }
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayAlternativeTextImage = function (image) {
            if ((image.hasAttribute('alt')) || (image.hasAttribute('title'))) {
                if ((image.hasAttribute('alt')) && (!image.hasAttribute('title'))) {
                    image.setAttribute('title', image.getAttribute('alt'));
                } else if ((image.hasAttribute('title')) && (!image.hasAttribute('alt'))) {
                    image.setAttribute('alt', image.getAttribute('title'));
                }
                this.idGenerator.generateId(image);
                image.setAttribute(DATA_ATTRIBUTE_TITLE_OF, image.getAttribute('id'));
            } else {
                image.setAttribute('alt', '');
                image.setAttribute('role', 'presentation');
                image.setAttribute('aria-hidden', 'true');
            }
        };

        AccessibleDisplayScreenReaderImplementation.prototype.displayAllAlternativeTextImages = function () {
            var i, image, images, len;
            images = this.parser.find('img').listResults();
            for (i = 0, len = images.length; i < len; i++) {
                image = images[i];
                if (self.hatemile.util.CommonFunctions.isValidElement(image)) {
                    this.displayAlternativeTextImage(image);
                }
            }
        };

        return AccessibleDisplayScreenReaderImplementation;

    })();

}).call(this);
