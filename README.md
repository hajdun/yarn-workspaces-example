# yarn workspaces example

This is a simple example of a monorepo project that use new [Yarn Workspaces](https://github.com/thejameskyle/rfcs-1/blob/workspaces/accepted/0000-workspaces.md) feature.
The original example is 'github.com:pedronauck/yarn-workspaces-example.git'

First version uses react-app-rewired with yarn workspaces.

## Add dependency
in root folder 
yarn add [dependency] -W

yarn add [dependency] -WD 

## Run

To check workspaces working just run

```
$ yarn install
$ cd apple
$ yarn start
```

The BUTTON component on the page comes from the shared folder.