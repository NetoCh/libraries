class SELECT {
  static fill() {
    let fn;
    if (typeof arguments[arguments.length - 1] === "function") {
      fn = arguments[arguments.length - 1];
    }

    let result = {
      success: true,
      message: ""
    };

    if (arguments[0].length > 0) {
      let arrayList = arguments[0];
      let elementId = arguments[1];
      let parameter1 = arguments[2];
      let parameter2 = arguments[3];
      arrayList.forEach(function(item) {
        let opt = document.createElement("option");
        if (parameter1 !== undefined && parameter1 != fn) {
          opt.text = item[parameter1];
        } else {
          opt.text = item;
        }
        if (parameter2 !== undefined && parameter2 != fn) {
          opt.value = item[parameter2];
        }
        document.getElementById(elementId).appendChild(opt);
      });
      result.message = "Success";
    } else {
      result.success = true;
      result.message = "Empty Array";
    }

    if (fn !== undefined && typeof fn === "function") {
      fn(result);
    }
  }
  static replace() {
    let fn;
    if (typeof arguments[arguments.length - 1] === "function") {
      fn = arguments[arguments.length - 1];
    }
    let result = {
      success: true,
      message: ""
    };
    if (arguments[0].length > 0) {
      let arrayList = arguments[0];
      let elementId = arguments[1];
      let parameter1 = arguments[2];
      let parameter2 = arguments[3];
      this.clearAll(elementId);
      arrayList.forEach(function(item) {
        let opt = document.createElement("option");
        if (parameter1 !== undefined && parameter1 != fn) {
          opt.text = item[parameter1];
        } else {
          opt.text = item;
        }
        if (parameter2 !== undefined && parameter2 != fn) {
          opt.value = item[parameter2];
        }
        document.getElementById(elementId).appendChild(opt);
      });
      result.message = "Success";
    } else {
      result.success = true;
      result.message = "Empty Array";
    }

    if (fn !== undefined && typeof fn === "function") {
      fn(result);
    }
  }
  static replaceFromPosition() {
    let fn;
    if (typeof arguments[arguments.length - 1] === "function") {
      fn = arguments[arguments.length - 1];
    }
    let result = {
      success: true,
      message: ""
    };
    if (arguments[0].length > 0) {
      let arrayList = arguments[0];
      let elementId = arguments[1];
      let parameter1 = arguments[2];
      let parameter2 = arguments[3];
      let startingPoint = arguments[4];
      let select = document.getElementById(elementId);
      let selectLength = select.options.length;
      if (startingPoint < selectLength) {
        let amountToPop = selectLength - startingPoint;
        for (let i = 0; i < amountToPop; i++) {
          select.remove(startingPoint);
        }
        arrayList.forEach(function(item) {
          let opt = document.createElement("option");
          if (parameter1 !== undefined && parameter1 != fn) {
            opt.text = item[parameter1];
          } else {
            opt.text = item;
          }
          if (parameter2 !== undefined && typeof parameter2 != fn) {
            opt.value = item[parameter2];
          }
          document.getElementById(elementId).appendChild(opt);
        });
        result.message = "Success";
      } else {
        result.success = false;
        result.message = "Theres no enough items in the select";
      }
    } else {
      result.success = true;
      result.message = "Empty Array";
    }

    if (fn !== undefined && typeof fn === "function") {
      fn(result);
    }
  }
  static clearAll(elementId) {
    let select = document.getElementById(elementId);
    select.options.length = 0;
  }
}
