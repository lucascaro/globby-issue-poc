import { globby } from "globby";

(async () => {
  const paths = await globby(["./node_modules"], { dot: true });
  console.log(paths.join("\n"));
})();
