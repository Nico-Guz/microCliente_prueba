import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@udistrital/root-config",
  app: () => System.import("@udistrital/root-config"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
