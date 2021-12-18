# Installation
## Prerequisites
- [Node.js](https://nodejs.org/) 16.6.0 or newer is required
- [Git](https://git-scm.com/)
## Using the helper (recommended) <Badge text="1.3.0-alpha+" />
### Installation Steps
```bash
git clone https://github.com/kayano-bot/kayano.git
```
Open `.env.example` and fill out the information
and then rename the file you've just edited to `.env` when you are done. For more information [click here](configuration/#env)

*For extra customization open the `config.js`*(optional)

<code-group>
<code-block title="YARN">
```bash
yarn && yarn run helper
```
</code-block>

<code-block title="NPM">
```bash
npm i && npm run helper
```
</code-block>
</code-group>

And now you can choose with your *arrow keys* what you want to do

### Options
- Start the bot (pretty selfexplainatory)
- Start the RPC ad (starts an activity on your Discord profile which is showing two buttons related to Kayano)
- Register commands (needs to be run in order to "register" the commands so you can actually use the commands)
- Update (Updates using git and automatically installs/updates dependencies)


## Manual Installation
### Cloning the Repo
```bash
git clone https://github.com/kayano-bot/kayano
```
### .env
Open `.env.example` and fill out the information
and then rename the file you've just edited to `.env` when you are done.

### Extra customization (optional)
*For extra customization open the `config.js`*
### Installing dependencies
This is very important as this installs external packages that Kayano needs to work properly.

<code-group>
<code-block title="YARN">
```bash
yarn run start
```
</code-block>

<code-block title="NPM">
```bash
npm run start
```
</code-block>
</code-group>

## Scripts
These are the most common actions you can easily perform via the terminal.
### Start the bot
<code-group>
<code-block title="YARN">
```bash
yarn run start
```
</code-block>

<code-block title="NPM">
```bash
npm run start
```
</code-block>
</code-group>

### Register commands
<code-group>
<code-block title="YARN">
```bash
yarn run registerCommands
```
</code-block>

<code-block title="NPM">
```bash
npm run registerCommands
```
</code-block>
</code-group>

### Eslint <Badge text="1.1.0-alpha+" />
<code-group>
<code-block title="YARN">
```bash
yarn run lint
```
</code-block>

<code-block title="NPM">
```bash
npm run lint
```
</code-block>
</code-group>
