# cloudtower-api-skills-generator

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts 4.8.0
```

This script will download `https://code.smartx.com/specs/<version>-swagger.json`,
check that the version exists, add `cloudtower-api` to `info.title`, write the
result to `./specs/current-swagger.json`, and then run `bunx openapi-to-skills`.
