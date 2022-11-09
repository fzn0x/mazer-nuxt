## Pre-requisites

- Node.js v16.9.0 or above
- Enable `corepack`

## Installing steps for developer

- Clone your forked project
- Install deps with pnpm

```sh
$ pnpm install --shamefully-hoist
```

- Run development server

```sh
# automagically watch changes for you after run
$ pnpm run dev
```

_It's very simple!_

## Contributing

- Star the project :star: and [fork it](https://github.com/zuramai/mazer/fork).
- Clone your fork `git clone https://github.com/<your username>/mazer`
- Create your feature branch (`git checkout -b my-new-feature`).
- Commit your changes:
  - Components: `git commit -am 'feat(components): add <component name> component'`
  - Documentation: `git commit -am 'docs: fix typo'`
  - Configuration file and application bug-free changes: `git commit -am 'meta: add LF'`
- Push your change (`git push -u origin my-new-feature`).
- Go to your forked repository on github and submit a pull request to Mazer Nuxt!
