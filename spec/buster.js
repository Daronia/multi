var config = module.exports;

config["My tests"] = {
    rootPath: "../",
    environment: "browser",
    // or "node"
    sources: ["src/lib/knockout-2.1.0.debug.js", "src/lib/knockout.mapping-latest.debug.js", //
    "src/viewmodel.js"],
    tests: ["spec/*Test.js"]
};

// Add more configuration groups as needed