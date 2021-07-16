#!/usr/bin/env node
import arg from "arg";
import { run } from "./index";

const args = arg({
  "--host": String,
  "--port": Number,
});

const host = args["--host"] ?? "0.0.0.0";
const port = args["--port"] ?? 8080;

run(host, port);
