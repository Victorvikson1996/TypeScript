
export interface Global {
  btoa: any;
  atob: any;
  self: any;
  Buffer: any;
  process: any;
  location: any;
}

declare var global: Global;
if (typeof global.self === "undefined") {
  global.self = global;
}
