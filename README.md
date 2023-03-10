# vanilla-js-custom-component
This is a demo project of a custom component defined using vanilla JavaScript

## Try it out
1. Run `npm install`
2. Run `npm run start`

## What is happening here?
The custom component recieves data from the host (JS in the index.html) in two ways:
1. attributes for simple data
2. custom properties for complex data 

The custom component emits an event that bubbles - makes it visible to parents / root html element. Bubbling is the default behaviour but here we explicity declare it. To prevent bubbling you could use `stopPropagation`.
1. `dispatchEvent` is used in the custom component to emit a custom event
2. `addEventListener` is used in the parent to be on the lookout for a specified event

When setting up eventListeners, remember to remove them when no longer needed, not showcased in this demo, or you could end up draining memory.
