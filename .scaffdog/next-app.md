---
name: "next-app"
root: "."
output: "packages/*"
ignore: []
questions:
  name: "Please enter any app name."
---

# `{{ inputs.name }}/app/page.jsx`

```jsx
export default function () {
  return <h1>Hello App router in {process.cwd()}</h1>;
}
```

# `{{ inputs.name }}/package.json`

```json
{
  "name": "{{ inputs.name }}",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "license": "MIT"
}
```
