const hsw = require("../assets/hsw.patched.js");

try {
  hsw(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmIjowLCJzIjoyLCJ0IjoidyIsImQiOiJtVVpzcmV6WGVoazdnSHBWUmVTSFlxVWVsREIxc0NaYzV1MGxzckNVSGZxWnM5clk4OG5zbFNmd251bllGUnk2Z0VEUDNmSU14UzlwRFFIcXE0bk8ra1JVOVl5UElydGlOdDgvdU9QOWdnTjlGRU81Q3IrNVdBSDdrQjNwVHVocms3ZUZjYUxKcHhYd1FXM3pPTFhuVGs0bm80Zk42bCt4M0hOZVdDdkY0alJGYURCNzNZMGFaK1laNVE9PWlocVVTd3lSbHAvS2F6SW0iLCJsIjoiaHR0cHM6Ly9uZXdhc3NldHMuaGNhcHRjaGEuY29tL2MvYjRiNGZmYyIsImUiOjE2Njk1NzE5NTMsIm4iOiJoc3ciLCJjIjoxMDAwfQ.q9bmnTMD9cEGVQAsR1rQpeFzkrpkbK3eFq7FqfpLgyY"
  ).then((n) => console.log(n));
} catch (e) {
  console.log(e);
}
