
---
**ABANDONED - DO NOT USE**

This project has moved to https://gitlab.loom.de/loom/node-modules/gloom-task-babel 

---

# Installation

## Include Package

```shell
npm install https://github.com/loomgmbh/node-gloom-task-babel.git
```

## Load Package

Add `gloom-task-babel` in  `gloom.json` to key `loadModules` and make sure it will load after `gloom-tasks` if `gloom-tasks` is loaded.

```json
...
  "loadModules": [
    "gloom-task-babel"
  ],
...
```
