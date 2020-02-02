# libraries

##Select Services##

-SELECT.fill(data,selectId, {}, function(result){});                                                                                     
-SELECT.replace(data,selectId, {}, function(result){});
-SELECT.replaceFromStartingPosition(data,"selectId", {}, startingPosition ,function(result){}) 
-SELECT.clearAll(selectedId);
/*
  data = array of object. Example below.
  selectId = id property of the select element.
  {} = configuration of option element. Example below.
  function(){} = Callback function receiving one parameter.
  startingPosition = Starting position from where the options will be replaced.
*/
  This methods use four (4-5) parameters to work.
  The first parameter consist of an array of data.
  The second parameter consist of the id of the select element.
  The third parameter consist of an object with the configuration of the options.
  The forth parameter consist of a callback function that recibes a success and message propertie.
      Data:  var arr = [
            {
              id: 1,
              value: 1,
              nombre: "uno",
              active: true,
              color: "red"
            },
            {
              id: 2,
              value: 2,
              nombre: "dos",
              active: false,
              color: "blue"
            }
          ];
        USAGE: 
        #1  SELECT.fill(arr, "selectId", {text: "nombre", class: "color"},function (result) {
            if (result.success) {
              console.log(result.message);
            } else {
              console.log(result.message);
            }
          });
        #2 SELECT.replace(arr, "selectId", {text: "nombre", id:"id", class: "purple"}, function (result) {
              if (result.success) {
                console.log(result.message);
              } else {
                console.log(result.message);
              }
            });
        #3 SELECT.replaceFromPosition(arr, "selectId", {}, 3,function(result){
              if(result.success){
                console.log(result.message);
              }else{
                console.log(result.message);
              }
            });
        #4 SELECT.clearAll("selectId");
          
         
          
