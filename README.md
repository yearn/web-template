# Yearn Web Lib
![](./public/og.jpeg)

The Yearn Web Template provides an easy way to bootstrap a new Yearn Web project.  
This include the default repo structure and configurations with the latest dependencies and compatible web-lib version.  

The stack used for this project is the following:
- 💙 [Yearn Web Lib](https://github.com/yearn/web-lib) — Base for our web-lib
- 🚀 [Next](https://nextjs.org) — JavaScript library for user interfaces
- ▲ [Vercel](https://vercel.com) — Cloud deployment platform
- 📄 [TypeScript](https://www.typescriptlang.org/) for static type checking
- 💄 [ESLint](https://eslint.org/) for code linting

### Install and run
1. Clone as template from GitHub
2. Run `yarn`
3. Run `yarn run dev`
4. Open the browser and navigate to `http://localhost:3000`


### Usage

##### Don't forget to change meta tags!
You can change the meta tags in the `next.config.js` file:
- Update `WEBSITE_URI` with the base path of your project. This will be used for link sharing and OG image.
- Update `WEBSITE_NAME` and `WEBSITE_TITLE` with your project name
- Update `WEBSITE_DESCRIPTION` with your project description
- Update `PROJECT_GITHUB_URL` with your project GitHub link

Then, you can go in `pages/_app.tsx` and update some more info: 
- Update the content of the meta `theme-color` with your primary color
- Update `og.jpeg` by the OG image name in the `public` folder
- Update twitter handle if required

Then, you can update the `public/manifest.json` file which will be use for the Gnosis wallet support:
- Update `name` with your project name
- Update `description` with your project description
- Update `iconPath` with the relative path to your SVG icon (ideally, it should stay as is)