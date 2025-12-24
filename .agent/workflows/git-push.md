---
description: How to automatically push changes to GitHub after completing tasks
---

# Auto Git Push Workflow

After completing any code changes or fixes, follow these steps to push to GitHub:

// turbo-all

## Steps

1. Stage all changes:
```powershell
git add -A
```

2. Commit with a descriptive message:
```powershell
git commit -m "Your commit message here"
```

3. Push to remote:
```powershell
git push
```

## Combined Command (PowerShell)
Use semicolons instead of && in PowerShell:
```powershell
git add -A; git commit -m "Your commit message"; git push
```

## Notes
- Always use descriptive commit messages
- The `// turbo-all` annotation above means all commands in this workflow will auto-run
- If push fails due to remote changes, run `git pull --rebase` first
