# Learning-Typescript

### Installation & Compiling TS File.
Iinstallation guide: https://www.typescriptlang.org/download
If you want to install TS globally, run the following command.
```
npm install -g typescript
```
Once done, you can compile any TS file by writing the below command in terminal. Make sure terminal is in right folder or you enter the correct file path.
```
tsc <filename>.ts
```
OR
If you want TS as a package, you can add typescript to dev dependency in your _package.json_ file by below command.
```
npm install typescript --save-dev
```
Once done, you can compile TS file by writing the below command:
```
npx tsc
```
or you add modify your _package.json_ file and add a _start_ command too:
```
"start": npx tsc <filename>.ts
```
Then you can run the following command to compile TS files
```
npm run start
```

## License
MIT