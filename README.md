# ⛸️ Wrapn

⏱️ Create the fastest components using Tailwind.

🎾 Autocomplete provides a joyful experience.

🌯 Only an HTML element, but a styled one.





<br/>






# Usage

## Wrapping HTML elements
```jsx
import { wrapn } from 'wrapn'

// You can wrap any HTML element
const MyButton = wrapn('button')`
    h-12 px-6
    text-white
    bg-blue-500
`
```

```jsx
// Now, you can use it
<MyButton>Click</MyButton>
```


## Wrapping components
```jsx
// Create a base component
const ButtonBase = wrapn('button')`
    h-12 px-4
    rounded-lg
`

// <ButtonPrimary/>
const ButtonPrimary = wrapn(ButtonBase)`
    bg-blue-500
`

// <ButtonSecondary/>
const ButtonSecondary = wrapn(ButtonBase)`
    bg-gray-500
`
```







<br/>








# TailwindCSS Intellisense

 - Install `Tailwind CSS IntelliSense` Extension to VS Code.
 - Press `Ctrl` + `Shift` + `P` keys at the same time.
 - Type `Open User Settings (JSON)` in the search box.
 - Put the content below inside the settings object.
 ### The content:
 ```json
 "editor.quickSuggestions": {
     "strings": true
 },
     
 "tailwindCSS.experimental.classRegex": [
     "wrapn\\(.*?\\)`([^`]*)"
 ],
 ```
 - Done! You can now use Tailwind CSS IntelliSense.





<br/>





# Installation
```
npm install wrapn
```
or
```
yarn add wrapn
```
or
```
pnpm add wrapn
```





<br/>





# Development
Clone the repo
```
git clone https://github.com/wrapn/wrapn.git
```
Install the dependencies
```
yarn install
```

<br/>


## Made with ❤️ by Wrapn contributors...