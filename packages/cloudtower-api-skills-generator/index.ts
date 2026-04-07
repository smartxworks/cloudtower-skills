import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

type OpenAPISpec = {
  info?: {
    title?: string;
  };
};

const packageDir = import.meta.dir;
const specsDir = join(packageDir, "specs");
const currentSpecPath = join(specsDir, "current-swagger.json");
const swaggerBaseUrl = "https://code.smartx.com/specs";

function addCloudTowerTitle(spec: OpenAPISpec) {
  const originalTitle = spec.info?.title?.trim() ?? "";
  const title = originalTitle || "cloudtower-api";

  spec.info = {
    ...spec.info,
    title,
  };
}

async function runGenerateScript() {
  await new Promise<void>((resolve, reject) => {
    const child = spawn(
      "bunx",
      [
        "openapi-to-skills",
        "./specs/current-swagger.json",
        "-o",
        "../../skills/",
        "-f",
        "-t",
        "templates",
      ],
      {
      cwd: packageDir,
      stdio: "inherit",
      },
    );

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`generate command failed with exit code ${code ?? "unknown"}`));
    });
  });
}

async function main() {
  const version = process.argv[2];

  if (!version) {
    throw new Error("Usage: bun run index.ts <version>");
  }

  const swaggerUrl = `${swaggerBaseUrl}/${version}-swagger.json`;
  const response = await fetch(swaggerUrl);

  if (!response.ok) {
    throw new Error(`Swagger for version ${version} does not exist: ${swaggerUrl}`);
  }

  const spec = (await response.json()) as OpenAPISpec;
  addCloudTowerTitle(spec);

  await mkdir(specsDir, { recursive: true });
  await Bun.write(currentSpecPath, `${JSON.stringify(spec, null, 2)}\n`);

  console.log(`Downloaded swagger: ${swaggerUrl}`);
  console.log(`Prepared spec: ${currentSpecPath}`);

  await runGenerateScript();
}

await main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
