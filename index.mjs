import { globby } from "globby";

(async () => {
  const paths = await globby(["./node_modules"]);
  console.log(paths.join("\n"));
})();
