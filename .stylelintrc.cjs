module.exports = {
    "extends": ['stylelint-config-standard', 'stylelint-prettier/recommended'],
    "plugins": ["stylelint-less"],
    "rules": {
        "at-rule-no-unknown": null,
        "color-no-invalid-hex": true,
        "less/color-no-invalid-hex": true,
        "selector-class-pattern": null,
        "no-empty-source": null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ["global"],
            },
        ],
        // "selector-class-pattern": "false",
        // "no-empty-source": "off"
    }
}