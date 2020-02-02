# Select Services

1.  SELECT.fill(data,selectId, {}, function(result){});                                                                                     
1.  SELECT.replace(data,selectId, {}, function(result){});
1.  SELECT.replaceFromStartingPosition(data,"selectId", {}, startingPosition ,function(result){}) 
1.  SELECT.clearAll(selectedId);

### Parameters
*   data = array of object. Example below.
*   selectId = id property of the select element.
*   {} = configuration of option element. Example below.
*   function(){} = Callback function receiving one parameter.
*   startingPosition = Starting position from where the options will be replaced.

 >  This methods use four (4-5) parameters to work.<br>
>   The first parameter consist of an array of data.<br>
>   The second parameter consist of the id of the select element.<br>
>   The third parameter consist of an object with the configuration of the options.<br>
>   The forth parameter consist of a callback function that receives a success and message properties.<br>
     
***
## Usage:
### Data:
`var arr = [`<br>
            `{`<br>
              `id: 1,`<br>
              `value: 1,`<br>
              `nombre: "uno",`<br>
              `active: true,`<br>
              `color: "red"`<br>
            `},`<br>
            `{`<br>
              `id: 2,`<br>
              `value: 2,`<br>
              `nombre: "dos",`<br>
              `active: false,`<br>
              `color: "blue"`<br>
            `}`<br>
          `];`<br>
          
    var arr2 = ["opt1", "opt2"]
### Functions <br>
        #1  `SELECT.fill(arr, "selectId", {text: "nombre", class: "color"},function (result) {`
            `if (result.success) {`
              `console.log(result.message);`
            `} else {`
              `console.log(result.message);`
            `}`
          `});`
        #2 `SELECT.replace(arr, "selectId", {text: "nombre", id:"id", class: "purple"}, function (result) {`
              `if (result.success) {`
                `console.log(result.message);`
              `} else {`
                `console.log(result.message);`
              `}`
            `});`
        #3 `SELECT.replaceFromPosition(arr, "selectId", {}, 3,function(result){`
              `if(result.success){`
                `console.log(result.message);`
              `}else{`
                `console.log(result.message);`
              `}`
            `});`
        #4 `SELECT.clearAll("selectId");`
          
         
          

