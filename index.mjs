import { globby } from "globby";

(async () => {
  const paths = await await globby(["./node_modules"]);

  console.log(paths);
})();
