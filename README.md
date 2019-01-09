# StateProperty.js

An API extention to Object which allows user to create object property whose value will be dependent on the object state.
It is useful if the code execution has conditional flow. It can minimize the use of if statements in Javascript coding. The library is wrapped in AMD wrapper, thus it can be loaded by requirejs. It can also be loaded directly using script tag.

**Pen Example:** https://codepen.io/ishaananuraag/pen/GPXZNY
 
## CDN 
```html
<script src="http://cdn.jsdelivr.net/gh/ishaananuraag/StateProperty.js/code/StateProperty.js"></script>
```

## defineStateProperty

StateProperty.js provides defineStateProperty API on Javascript Object constructor. 


### Syntax:
```javascript
Object.defineStateProperty(obj[, prop], descriptor);
```

#### Parameters
 + **obj** The object on which to define the property.
 + **prop** (or valueAttribute) - The name or Symbol of the property to be defined. (default: 'value')
 + **descriptors** The descriptors for the property being defined.

### Descriptors: 
 + **values** This is the actual object representing different states(as keys) and their values 
 + **stateAttribute** The name or Symbol of the property which will determine the value of the valueAttribute. (default: 'state')
 + **defaultState** This is the default state for the  property being defined to refer to. If the _stateAttribute_ is already present in object, this has no effect. 
 
##### Javascript Example:
```javascript

	var obj={};
	
	Object.defineStateProperty(obj,'showGreeting',{
		values:{
			'en': function(){
				console.log('Hello');
			},
			'fr': function(){
				console.log('Bonjour');
			},
		},
		stateAttribute: 'language',
		defaultState: 'en',	
	});
	
	obj.showGreeting();
	
	obj.language='fr';
	
	obj.showGreeting();
```

##### Output:
```
> Hello
> Bonjour
```

