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

##### Meta tags and Meta Data
You can update the `public/manifest.json` file which will be use to handle the meta tags and for the Gnosis wallet support:
- Update `name` with your project name
- Update `description` with your project description
- Update `iconPath` with the relative path to your SVG icon (ideally, it should stay as is)
- Update `locale` for the default language of your project
- Update `uri` with the base path of your project.
- Update `og` with the path to your OG image.
- Update `twitter` with your twitter handle
- Update `github` with your project GitHub link.

More options are available in the `public/manifest.json` file.

##### IPFS deployement
By default, IPFS auto deployments are disabled. You can enable the workflow by editing the `.github/workflows/ipfs.yml` file, un-commenting lines 5-6, enabling an IPFS deployment each time a push occurs on the `main` branch.  
Otherwise, you can go in actions and run the `ipfs` action.  
Two environment variables are required to make it work, which are configurable in your Github Project Secret Variables:
- `IPFS_HOST`: the host of the IPFS node
- `IPFS_PORT`: the port of the IPFS node

##### Run with Docker
This project can be run with Docker.
1. Build the image: `docker build -t [name-of-your-container] .`
2. Run the container: `docker run -p 3000:3000 [name-of-your-container]`
3. Open the browser and navigate to `http://localhost:3000`
