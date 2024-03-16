# yarn workspaces example

This is a simple example of a monorepo project that use new [Yarn Workspaces](https://github.com/thejameskyle/rfcs-1/blob/workspaces/accepted/0000-workspaces.md) feature.

## Add dependency

yarn add [dependency] -W

npx yarn@1.19.0 workspace yarn-workspaces-example add  [dependency]

## Run

To check workspaces working just run

```
$ yarn install
$ cd apple
$ yarn start
```

First, Yarn will hoist dependencies in the project root, after that you can link your packages among then and running without publish. You'll see in the `package.json` of `b` package that depends of `a` package and works great without any `./node_modules` folder inside it.

Workspaces are a great alternative for some monorepo tools and in the near future can be a better solution!

Cheers 🍻

## docker

single folder
```
docker build -t frontend -f Dockerfile ../../
```

```
docker run --env-file .docker-env -it -p 8080:8080 frontend
```

## cypress

```
docker run -it -v $PWD:/cypress/e2e -w /cypress/e2e cypress/included:12.17.0 --config baseUrl=http://localhost:8080
```