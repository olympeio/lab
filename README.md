## Olympe LAB Extension

This project is made for the Olympe community to be able to create coded bricks (logic and visual) and deploy them to the community environment.

### How to participate

1. First register to the community following the instructions on the [support website](https://olympe.support/#getting-started).
2. Code your bricks and test them [locally](https://olympe.support/local_install).
3. Send a message on [discord](https://discord.gg/czqv9vFTBA) to join the "Olympe Community" team on Github to become a contributor of this project.
4. Create a pull request with your code:
   1. clone this repository
   2. create a branch based on the `develop` branch. Name it like this: `<community username>-<bricks set name>`
   3. create a pull request of your branch to the develop branch. Ensure that you respect the structure specified in the [rules](#Rules).

### Rules

This is a public repository, so all the code you will push will be publicly visible. This also means that you will share `src` folder with others.

Here are the rules and the folder structure you need to follow in order to have accepted pull requests:

1. Nothing outside the `src` folder will be accepted.
2. Inside the `src` folder, you will see 3 folders:
   1. `common`: contain all files added to both Browser and NodeJS bundles. It MUST be code that works on both environments.
   2. `web`: contain all files added ONLY to the Browser bundle. It will typically contain the visual components.
   3. `node`: contain all files added ONLY to the NodeJS bundle. It will typically contain logic bricks that use backend libraries.
3. Inside the 3 sub-folders, you must put your files in a folder named using your GitHub username. We won't accept any change coming from a user that update files in another folder than its own. 
   - Example: my username on GitHub is `john.smith`, I'll add my visual component js files into `src/web/john.smith` folder. 
4. All source files are written in javascript or typescript.
