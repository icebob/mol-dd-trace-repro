const tracer = require("dd-trace").init();

tracer.use("moleculer", {
	params: true
});
