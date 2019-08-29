const PROXY_CONFIG = [{
  context: [
    "/api/**"
  ],
  target: "http://localhost:3000",
  secure: false,
  "logLevel": "debug"
}];
export default PROXY_CONFIG;