# Configuration
## Setup Supabase <Badge text="1.9.0-alpha+" />
You need to create a supabase project on [Supabase](https://supabase.io) and [fill in some information into your `.env`](#supabase-url).
Also you need to create *two* tables. For this you can easily click the little terminal icon in the left sidebar of your project. Now create a new query and paste this in:
```sql
CREATE TABLE channel (
  id text PRIMARY KEY,
  channel_name varchar NOT NULL,
  crosspost boolean NOT NULL
);

CREATE TABLE guilds (
  guild_id text PRIMARY KEY,
  guild_name text NOT NULL,
  language text NOT NULL
);

```
Now click on "RUN" and this will automatically create the needed tables and its values.

## `.env`
The most important things can be found in the `.env` file. This section is explaining what to fill into the file.

##### Disclaimer
All IDs and Tokens used in this documentation are fake and should not be used even if there weren't fake.

#### Example (.env.example)
```
TOKEN = # Token of the bot
TOPGG_TOKEN = # https://top.gg/bot/<BOT_ID>/webhooks
CLIENT_ID = # Client/Application ID of the Bot
ERROR_CHANNEL = # ID of the channel the bot should send errors to
OWNER_ID = # ID of the Owner (sensei) from the bot
RNDM_API_KEY = # https://some-random-api.ml/docs/welcome/keys
SUPABASE_URL = # URL for your Supabase project
SUPABASE_KEY = # Also known as the anon public key
PORT = 5151 # Port used for http://localhost:5151/kayano-uptime (optional)
```

#### What is the expeted input for each line?
### Token
**Go to the Discord Developer Portal**

Your first step is to browse over to the [Discord Developer Portal](https://discordapp.com/developers/applications/)

This portal shows all of your applications and bots.

If you already have a bot created, click it in the list. If you don’t have any discord bots, click the "New Application” button.
<hr />

**Give Your Bot a Name**

Here you’ll be prompted to give your application (bot) a name.

You can of course just choose *Kayano* or maybe try something new.

**Retrieve your token**

Your next step is to go over the menu on the left side of the screen and click "Bot”. It’s the icon that looks like a little puzzle piece.

Now you want to click the blue "Add Bot" button

Click the "Yes, do it!” button…

You’ll now see a heading named "Token" and a button to *copy* it.

![Token](/images/get-started/token.jpg)

**Add it to the .env**

Now you can paste your copied token into the `.env` like this:
```
TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin
[...]
```

### Client ID
Also named Application ID is the User ID of the Bot/Application. You can also get this from the [Discord Developer Portal](https://discordapp.com/developers/applications/)
by clicking on your application and under "General Information" click the copy button under the "Application ID".

![Application ID](/images/get-started/app_id.jpg)

Now you can paste your copied Application ID into the `.env` like this:
```
TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # Last Section
CLIENT_ID = 874366396261445807 # This Section
[...]
```

### Error Channel
This will be the channel ID of the channel all errors should be logged into.
1. Enable Dev Mode
    - Go into your "Discord User Settings" > "Advanced" and activate "Developer Mode"
    ![Application ID](/images/get-started/dev_mode.jpg) 
2. Get Error Channel ID
    - Right click on the channel your errors should be send to
    - Click on "Copy ID"
    
    ![Copy Channel ID](/images/get-started/copy_channel_id.jpg)

Now you can paste your copied Application ID into the `.env` like this:
```
TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section
CLIENT_ID = 874366396261445807 # Last Section
ERROR_CHANNEL = 814761725420623374 # This Section
[...]
```

### Owner ID
This will be the ID of the user who has the power over the bot.
1. Enable Dev Mode (if you haven't already)
    - Go into your *Discord User Settings* > *Advanced* and activate *Developer Mode*
    ![Application ID](/images/get-started/dev_mode.jpg)
2. Get Owner ID
    - Right click on the owner in Discord (probably yourself)
    - Click on "Copy ID"

Now you can paste your copied Owner ID into the `.env` like this:
```
TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section
CLIENT_ID = 874366396261445807 # 2nd Section
ERROR_CHANNEL = 814761725420623374 # Last Section
OWNER_ID = 751092600890458203 # This Section
[...]
```

### Some random API Key
For some commands you need to use a "Some random API" Premium Key. This can be also get for free.
For more information [go to their documentation](https://some-random-api.ml/docs/welcome/keys).

Now you can paste your key into the `.env` like this:
```
TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section
CLIENT_ID = 874366396261445807 # 2nd Section
ERROR_CHANNEL = 814761725420623374 # 3rd Section
OWNER_ID = 751092600890458203 # Last Section
RNDM_API_KEY = pqzBjOM57rvXyQe6GDfYSDn80 # This Section
[...]
```

### Supabase URL <Badge text="1.9.0-alpha+" />
In order to connect and interact with the Database you'll need the URL of your project. You can find it under *Settings > API > Config > URL* inside your Supabase Project Dashboard.

After you copied this URL you can paste the URL into the `.env` like this:
```
TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section
CLIENT_ID = 874366396261445807 # 2nd Section
ERROR_CHANNEL = 814761725420623374 # 3rd Section
OWNER_ID = 751092600890458203 # 4th Section
RNDM_API_KEY = pqzBjOM57rvXyQe6GDfYSDn80 # Last Section
SUPABASE_URL = https://rbtwcgjfbywmbwlunhan.supabase.co # This Section
[...]
```

### Supabase Key <Badge text="1.9.0-alpha+" />
In order to connect and interact with the Database you'll need the URL of your project. You can find it under *Settings > API > Project API Keys > anon public*.

After you copied this key you can paste the URL into the `.env` like this:
```
TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section
CLIENT_ID = 874366396261445807 # 2nd Section
ERROR_CHANNEL = 814761725420623374 # 3rd Section
OWNER_ID = 751092600890458203 # 4th Section
RNDM_API_KEY = pqzBjOM57rvXyQe6GDfYSDn80 # 5th Section
SUPABASE_URL = https://rbtwcgjfbywmbwlunhan.supabase.co # Last Section
SUPABASE_KEY = deJwuahuvOawhodnadkjbakwooIdawbKbBHdwaAkWiA.djwoafhauiwfhaiugdiluofhgzyIZDawhdzi78wdaHjbvALAdhablwvfvlzg.djwaoihfauohwuhdvh8hwihd3uiZudiwaubkCioawd # This Section
[...]
```

### Port (optional) <Badge text="1.10.0-alpha+" />
When you start the bot a "website" will be automatically be deployed to http://<YOUR_IP_ADRESS>:5151/kayano-uptime. With it you can ping this adress to see if the bot is up & running.
However you can change the port for it (5151 by default) inside your `.env`. This can be useful if another program is already using this port.

In the end it will look something like this:
```
TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section
CLIENT_ID = 874366396261445807 # 2nd Section
ERROR_CHANNEL = 814761725420623374 # 3rd Section
OWNER_ID = 751092600890458203 # 4th Section
RNDM_API_KEY = pqzBjOM57rvXyQe6GDfYSDn80 # 5th Section
SUPABASE_URL = https://rbtwcgjfbywmbwlunhan.supabase.co # 6th Section
SUPABASE_KEY = deJwuahuvOawhodnadkjbakwooIdawbKbBHdwaAkWiA.djwoafhauiwfhaiugdiluofhgzyIZDawhdzi78wdaHjbvALAdhablwvfvlzg.djwaoihfauohwuhdvh8hwihd3uiZudiwaubkCioawd # Last Section
PORT = 5151 # This Section
```

#### Done!
And you're done 🎉 Now your `.env` will look something like above.

## `config.js`
If you want to dive deeper into the customization you can change some values of the `config.js` file located in the root of the Kayano Project.
