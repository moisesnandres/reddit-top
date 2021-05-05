# Reddit Top

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can view it [here](https://reddit-top-moisesnandres1.vercel.app/)

## Getting Started

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

Run the e2e tests headless with cypress.

```bash
yarn test
```

## TODO

- [x] Use github actions for e2e tests (Done [here](https://github.com/moisesnandres/reddit-top/actions/workflows/e2e-tests.yml))
- [x] Fix issue with Reddit API token (I am using endpoints without token)
- [x] Add pagination
- [x] Search by subreddit
- [ ] Handle errors from endpoint
- [ ] Keep read entries
- [ ] Add animation
- [ ] Update e2e test
- [ ] Use tailwind
