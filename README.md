Repo to reproduce potential issue with task error handling in sst dev


### To reproduce:

Run the app in dev mode:

`npx sst dev`

Run the test:

`npx sst shell vitest`

Check the task in the aws console - it will fail with `exit code 0`. It **should be 4** as the code has `process.exit(4)`

### Compare with:

Deploy the app to a stage:

`npx sst deploy --stage test`

Run the test:

`npx sst shell --stage test vitest`

Check the task in aws console - it fails with `exit code 4` as expected.