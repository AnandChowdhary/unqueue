# 📏 Unqueue

Simple, zero-config, in-memory queue for async JS tasks

<!-- prettier-ignore-start -->
|   | Status |
| - | - |
| Build | [![Node CI](https://github.com/koj-co/unqueue/workflows/Node%20CI/badge.svg)](https://github.com/koj-co/unqueue/actions?query=workflow%3A%22Node+CI%22) [![Dependencies](https://img.shields.io/librariesio/github/koj-co/unqueue)](https://libraries.io/github/koj-co/unqueue) [![GitHub release (latest by date)](https://img.shields.io/github/v/release/koj-co/unqueue)](https://github.com/koj-co/unqueue/releases) [![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/koj-co/unqueue)](https://snyk.io/test/github/koj-co/unqueue) |
| Health | [![License CI](https://github.com/koj-co/unqueue/workflows/License%20CI/badge.svg)](https://github.com/koj-co/unqueue/actions?query=workflow%3A%22License+CI%22) [![CLA Assistant](https://github.com/koj-co/unqueue/workflows/CLA%20Assistant/badge.svg)](https://github.com/koj-co/unqueue/actions?query=workflow%3A%22CLA+Assistant%22) [![Pull Request Labeler](https://github.com/koj-co/unqueue/workflows/Pull%20Request%20Labeler/badge.svg)](https://github.com/koj-co/unqueue/actions?query=workflow%3A%22Pull+Request+Labeler%22) |
| PRs | [![PR Generator CI](https://github.com/koj-co/unqueue/workflows/PR%20Generator%20CI/badge.svg)](https://github.com/koj-co/unqueue/actions?query=workflow%3A%22PR+Generator+CI%22) [![Merge PRs](https://github.com/koj-co/unqueue/workflows/Merge%20PRs/badge.svg)](https://github.com/koj-co/unqueue/actions?query=workflow%3A%22Merge+PRs%22) |
<!-- prettier-ignore-end -->

## ⭐️ Features

- No configuration or databases required (in-memory)
- Automatically retry tasks if they fail
- First-class TypeScript and Node.js 14 support

## 💻 Getting started

Install from npm:

```bash
npm install unqueue
```

Create a new instance of the class and use the `add` function:

```ts
import { Unqueue } from "unqueue";

const queue = new Unqueue();

queue.add(async () => {
  // Async function that might throw an error
});
```

You can configure the queue, these are the defaults:

```ts
const queue = new Unqueue({
  maxAttempts: 3,
  debug: false,
  ttl: 3600,
});
```

## 📄 License

[MIT](./LICENSE) © [Koj](https://koj.co)

<p align="center">
  <a href="https://koj.co">
    <img width="44" alt="Koj" src="https://kojcdn.com/v1598284251/website-v2/koj-github-footer_m089ze.svg">
  </a>
</p>
<p align="center">
  <sub>An open source project by <a href="https://koj.co">Koj</a>. <br> <a href="https://koj.co">Furnish your home in style, for as low as CHF175/month →</a></sub>
</p>
