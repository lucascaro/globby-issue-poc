import multimatch from "multimatch";

(async () => {
  console.log(
    "default matcher",
    multimatch(["node_modules", "node_modules/.bin"], ["**"])
  );
  console.log(
    "with dot option set to true",
    multimatch(["node_modules", "node_modules/.bin"], ["**"], { dot: true })
  );
})();
