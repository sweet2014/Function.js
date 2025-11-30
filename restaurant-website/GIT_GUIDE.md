# Git Commands Cheat Sheet

## Basic Commands

### Check Status
```bash
git status
# Shows: modified files, staged files, current branch
```

### View History
```bash
git log
# Shows all commits

git log --oneline
# Shows commits in short format

git log --oneline -5
# Shows last 5 commits
```

### Stage Files
```bash
git add filename.txt
# Stage a specific file

git add .
# Stage all changes in current directory

git add *.html
# Stage all HTML files
```

### Commit Changes
```bash
git commit -m "Your message here"
# Save staged changes with a message

git commit -m "Add feature" -m "Detailed description"
# Commit with title and description
```

### Push to Remote
```bash
git push
# Push to current branch

git push -u origin branch-name
# Push and set upstream (first time)
```

### Pull from Remote
```bash
git pull
# Download and merge changes from remote
```

## Branching

### View Branches
```bash
git branch
# List local branches

git branch -a
# List all branches (local and remote)
```

### Create Branch
```bash
git branch new-branch-name
# Create new branch

git checkout -b new-branch-name
# Create and switch to new branch
```

### Switch Branches
```bash
git checkout branch-name
# Switch to existing branch

git switch branch-name
# Modern way to switch branches
```

### Delete Branch
```bash
git branch -d branch-name
# Delete local branch (safe)

git branch -D branch-name
# Force delete local branch
```

## Undoing Changes

### Discard Local Changes
```bash
git checkout -- filename.txt
# Discard changes to a file

git restore filename.txt
# Modern way to discard changes
```

### Unstage Files
```bash
git reset HEAD filename.txt
# Unstage a file (keep changes)

git restore --staged filename.txt
# Modern way to unstage
```

### Undo Last Commit
```bash
git reset --soft HEAD~1
# Undo commit, keep changes staged

git reset --hard HEAD~1
# Undo commit and discard changes (CAREFUL!)
```

### Go Back to Previous Commit
```bash
git checkout commit-hash
# View old version (detached HEAD)

git checkout commit-hash -- filename.txt
# Restore specific file from old commit
```

## Viewing Changes

### See What Changed
```bash
git diff
# Show unstaged changes

git diff --staged
# Show staged changes

git diff filename.txt
# Show changes in specific file
```

### Compare Commits
```bash
git diff commit1 commit2
# Compare two commits

git diff HEAD~1 HEAD
# Compare last commit with current
```

## Remote Operations

### View Remotes
```bash
git remote -v
# List remote repositories
```

### Add Remote
```bash
git remote add origin https://github.com/user/repo.git
# Add remote repository
```

### Fetch Changes
```bash
git fetch
# Download changes without merging

git fetch origin branch-name
# Fetch specific branch
```

## Useful Combinations

### Quick Save Everything
```bash
git add . && git commit -m "Update" && git push
# Stage, commit, and push in one line
```

### See Last 5 Commits with Details
```bash
git log -5 --pretty=format:"%h - %an, %ar : %s"
# Hash - Author, Time : Message
```

### Undo All Local Changes
```bash
git reset --hard HEAD
# Return to last commit state
```

## Configuration

### Set User Info
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### View Config
```bash
git config --list
# Show all settings

git config user.name
# Show specific setting
```

## Tips

1. **Commit Often**: Small, frequent commits are better than large ones
2. **Write Clear Messages**: Describe what and why, not how
3. **Pull Before Push**: Always pull latest changes before pushing
4. **Check Status**: Run `git status` frequently
5. **Don't Commit Secrets**: Never commit passwords or API keys

## Common Workflows

### Starting New Feature
```bash
git checkout -b feature/new-feature
# Create and switch to feature branch
# Make changes
git add .
git commit -m "Add new feature"
git push -u origin feature/new-feature
```

### Updating Existing Code
```bash
git pull
# Get latest changes
# Make your changes
git add .
git commit -m "Update feature"
git push
```

### Fixing a Mistake
```bash
# If you haven't committed yet:
git restore filename.txt

# If you committed but haven't pushed:
git reset --soft HEAD~1
# Make corrections
git add .
git commit -m "Fixed version"

# If you already pushed:
# Make corrections
git add .
git commit -m "Fix mistake"
git push
```

## Your Restaurant Project Example

### What We Did
```bash
# 1. Created initial restaurant card
git add index.html styles.css script.js
git commit -m "Add restaurant card component"
git push -u origin claude/create-restaurant-card-01TiWT1eebe2dPGDieap7zxv

# 2. Added image slider
git add index.html styles.css script.js
git commit -m "Add sliding image carousel to restaurant card"
git push

# 3. Added more restaurants
git add index.html styles.css script.js
git commit -m "Add multiple restaurant cards with themed content"
git push

# 4. Organized into folder
git add restaurant-website/
git commit -m "Organize website files in restaurant-website folder"
git push
```

Each commit is a checkpoint you can return to!
