# JSTypeMonitor

This is a simple monitor to check when changes happens on some HTML element.
It can be used to trigger some functions like autocompletion or filling other
elements with the watched element value. For autocompletion, it have a minimum
chars configuration which will only trigger the result function when it reachs
the minimum length.

It's vanilla JavaScript, we don't need any framework to make it works and it can
be used with all the frameworks.

## Install

Just drop the files from the `src` dir on your code.

## Usage

Like: 

```javascript
options = { 
   element: 'journal_entry_creditable_name', 
   minimumLength: 3, 
   interval: 250, 
   callback: function(event) {
      console.log('element value: ' + event.target.value);
   }
}
(new Bluefish.JSTypeMonitor(options)).fire();
```

Where:

- **element** can be a DOM element or a string with the element id
- **minimumLength** is the minimum element value length to fire the callback function
- **interval** is how many milliseconds will be discarded to get a new value
- **calllback** is the function to be called after getting the element value

