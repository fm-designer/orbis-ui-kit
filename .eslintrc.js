module.exports = {
    extends: [
        "prettier"
    ],
    env: {
        browser: true,
        node: true,
        jasmine: true,
        jest: true,
        es6: true,
    },
    plugins: ["react", "@typescript-eslint", "react-hooks", "storybook"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module",
        project: "./tsconfig.json"
    },
    rules: {
        "indent": "off",
        "radix": "off",
        "no-underscore-dangle": 0,
        "arrow-body-style": "off",
        "no-unused-vars": "off",
        "func-names": "off",
        "no-restricted-syntax": "off",
        "prefer-const": "off",
        "no-console": "off",
        "no-else-return": "off",
        "no-debugger": "warn",
        "no-alert": "warn",
        "no-nested-ternary": 0,
        "no-return-assign": "off",
        "no-plusplus": "off",
        "prefer-template": "off",
        "no-bitwise": "off",
        "array-bracket-spacing": ["error", "always"],
        "class-methods-use-this": "off",
        // "linebreak-style": ["error", "windows"],
        "max-len": [
            "error",
            {
                "code": 120,
                "ignoreComments": true,
                "ignoreTrailingComments": true
            }
        ],
        "object-curly-newline": [
            "error",
            {
                "minProperties": 10,
                "consistent": true
            }
        ],
        "arrow-parens": [
            "off", "as-needed", { "requireForBlockBody": false }
        ],
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        "no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: true }
        ],
        "array-bracket-spacing": [
            "error",
            "always",
            {
                singleValue: true,
                objectsInArrays: false,
                arraysInArrays: false
            }
        ],
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                ImportDeclaration: "first",
                SwitchCase: 1
            }
        ],
        "@typescript-eslint/no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: true, typedefs: true }
        ],
        "react/jsx-indent": [
            "error",
            4,
            {
                "checkAttributes": false
            }
        ],
        "react/jsx-indent-props": ["error", 4],
        "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
        "react/prop-types": "off",
        "react/destructuring-assignment": "off",
        "react/default-props-match-prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-no-useless-fragment": "off",
        "react/require-default-props": "off",
        "import/prefer-default-export": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/mouse-events-have-key-events": "off"
    }
}
