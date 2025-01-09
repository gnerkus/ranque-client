[1]: https://community.cloudflare.com/t/cloudflare-pages-doesnt-support-angular-17-angular-18/661100/2
[2]: https://angular.dev/reference/configs/workspace-config

- When deploying the Cloudflare, you need to modify the following fields in _angular.json_ [1]:
```json
{
  "prerender": false,
  "ssr": false
}
```
This generates the complete build in the _dist/browser_ directory.

The _angular.json_ file is the workspace config file [2].
