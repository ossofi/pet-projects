# Hometasks HR 2024

## Installation

### Fork current repository into your account

1. Navigate to https://autocode.git.epam.com/esde-js-ts/web-dev-js-ts-tasks-hr
2. Click on `Fork` button in the top right corner
3. Select `namespace` with a name or your personal gitlab account
4. Set visibility level to `Public`
5. Navigate to your forker repository

### Cloning your forked repository with tasks into your local machine

1. Navigate to your forker repository and click on blue button `Clone`
2. In dropdown find section **Clone with SSH** and copy that url git@autocode.git.epam.com:...git
3. In console on your machine navigate to any folder you like and paste copied url after git clone: `git clone git@gitlab...web-dev-js-ts-tasks-hr.git`
4. Type in yes if console asks you about fingerprint
5. After cloning is done, in console type in `cd web-dev-js-ts-tasks-hr` and click Enter
6. Now you should be in a folder `web-dev-js-ts-tasks-hr`
7. In console type in `git config user.name "Name Surname"` where Name is your Name (same as on Gitlab profile) and Surname is your Surname (same as on Gitlab profile). **Your name should be written in English**. **Don't remove " " symbols**
8. In console type in `git config user.email youremailaddress@student.ehu.lt` where `youremailaddress@student.ehu.lt` is your address you used to register on Gitlab (the same as on Gitlab profile)
9. In console type in `git config user.name` and click Enter. You should see your name
10. In console type in `git config user.email` and click Enter. You should see your email address

## How to solve Hometasks

We are using different branches for your hometasks

```
main - used for general repository instructions
```

Each branch starting with `hometasks-...` contains a set of tasks dedicated to the lecture module.

```
hometasks-sections-hero
hometasks-sections-forms
...
```

To solve each hometask you must checkout to the related branch into your local cloned repository

## How to copy new hometasks into your already forked repository

### One-time installation step

Please add remote branch linking into your local git

#### Console

To do this, please in console run commands

```
git remote rm upstream

git remote add upstream https://autocode.git.epam.com/esde-js-ts/web-dev-js-ts-tasks-hr
```

#### Visual Studio Code

In Source Control menu click on three dots -> Remote -> Add remote -> Paste `https://autocode.git.epam.com/esde-js-ts/web-dev-js-ts-tasks-hr` -> Enter upstream

**NOTE** You might need to remove previously created upstream. In Source Control menu click on three dots -> Remote -> Remove remote -> upstream.

### How to start solving new tasks (get new branches into your Git)

#### Console

When the linking is created (see instructions above), run command `git fetch upstream` to get a new branch with tasks.

Type `git branch -a` to ensure you see in a list lines like `remotes/upstream/hometasks-...`.

Assuming the new branch (with new tasks you haven't solved yet) is `hometasks-simple-tasks`.

Type `git switch hometasks-simple-tasks`. If you see two messages

```
Branch 'hometasks-simple-tasks' set up to track remote branch 'hometasks-simple-tasks' from 'upstream'
Switched to a new branch 'hometasks-simple-tasks'
```

Then you did it correctly.

Now the next step is to publish that branch into your Git repositry (origin). Run command `git push -u origin`. You should see a list of messages containing that line:

```
...
To gitlab.com:YOUR_NAME/js-ts-tasks.git
* [new branch]     hometasks-simple-tasks -> hometasks-simple-tasks
...
```

You're done, now you could write solutions for your task.

#### Visual Studio Code

Now when the linking is created, In Source Control menu click on three dots -> Pull, Push -> Fetch From All Remotes menu item to get a new branch with tasks.

Then checkout/switch to that branch (`upstream/hometasks-...`)

Now you could create your solution locally.

To prepare for Autocode submit please push your local branch into your repository. In Source Control menu click on three dots -> Pull, Push -> Push to... -> Select **origin (not upstream)**

### How to get tasks updates

#### Console

Sometimes there are improvements in already published tasks. To get new changes from upstream repository you should use `git pull` command.

For example, let's assume there are some updated in `upstream/hometasks-simple-tasks` branch. Run in console `git pull upstream hometasks-simple-tasks` to pull recent changes from remote branch into your local repository.

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Open related `index.html` file either directly in the browser or using the VS Code extension `Live Server`

## How to submit solution to Moodle

1. Develop a solution
2. Commit your solution
3. _Push your solution to your forked repository_
4. Submit a link to the branch with solution in your forked repository to the moodle
