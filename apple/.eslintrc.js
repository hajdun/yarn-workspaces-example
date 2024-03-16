module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "globals": {
        JSX: "readonly",
        cy: true
    },
    "extends": [
        "plugin:react/recommended",
        "standard",
        "prettier",
        "plugin:cypress/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        "project": ["./tsconfig.json"],
        tsConfigRootDir: __dirname
    },
    "plugins": [
        "@typescript-eslint", "prettier"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString": false,
                "allowNumber": false
            }
        ],
        "no-console": process.env.NODE_ENV === "production" ? ["error"] : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? ["error"] : "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "multiline-ternary": "off",
        semi: "off",
        "space-before-function-paren": "off",
        "prettier/prettier": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }],
        "@typescript-eslint/no-explicit-any": 1,
        "no-restricted-imports": 2,
        "no-restricted-syntax": [
            "error",
            {
              "selector": "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
              "message": "Default React import not allowed since we use the TypeScript jsx-transform. If you need a global type that collides with a React named export (such as `MouseEvent`), try using `globalThis.MouseHandler`"
            }
          ]
    },
    "ignorePatterns": [".eslintrc.js", "config-overrides.js", "fileMock.js", "styleMock.js"],
    "settings": {
        react: {
            version: "detect"
        }
    }
}