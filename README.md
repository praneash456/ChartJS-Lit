
## Run tasks

Install the packages:

```sh
npm install
```

Build the web-component:

```sh
npx nx build my-lit-lib
```
  in case of any cache issues, run:
  ```sh
   npx nx build my-lit-lib --skip-nx-cache
  ```

At last serve the application:

```sh
npx nx serve my-angular-app
```


For any changes done inside `my-lit-lib.ts`, file and for the changes to reflect in the angular application, please do take a build (web-components) and then serve the angular framework.