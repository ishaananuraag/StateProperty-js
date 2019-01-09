/*!
 * StatePropertyJs JavaScript Object Extension
 *
 * Copyright (c) 2019 Ishaan Singh
 * Released under the MIT license
 *
 */
 (function (factory) {
   if(typeof define === "function" && define.amd) {    
	define(factory);
  } else {
    factory();
  }
})(function(){
	
	Object.defineStateProperty = function(object,valueAttribute,properties){

		if(typeof valueAttribute === "object"){
			properties=valueAttribute;
			valueAttribute=undefined;
		}

		return (function(object,valueAttribute,properties){
			var stateAttribute=(properties.stateAttribute||'state'),
				state=properties.defaultState || Object.keys(object)[0],
				map= Object.create(properties.values);

			Object.defineProperty(object,(valueAttribute||'value'),{
				get: function(e){
					return map[this[stateAttribute]];
				},
				set: function(value){
					map[this[stateAttribute]]=value;
				}
			});
			if(!object[stateAttribute]){
				Object.defineProperty(object,(properties.stateAttribute||'state'),{
					value: state,
					writable: true
				});
			}

			return object;	
		})(object,valueAttribute,properties);

	}
});