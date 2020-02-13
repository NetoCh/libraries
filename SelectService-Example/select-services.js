function SelectServices() {
  let self = this;

  this.fill = function () {
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
      let properties = arguments[2];
      if (typeof properties === "object" && properties !== fn) {
        arrayList.forEach(function (item) {
          let opt = document.createElement("option");
          let option = self.createElement(item, opt, properties);
          document.getElementById(elementId).appendChild(option);
        });
        result.message = "Success";
      } else {
        result.success = false;
        result.message = "Third parameter needs to be an object";
      }
    } else {
      result.success = true;
      result.message = "Empty Array";
    }
    if (fn !== undefined && typeof fn === "function") {
      fn(result);
    }
  };

  this.replace = function () {
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
      let properties = arguments[2];
      if (typeof properties === "object" && properties !== fn) {
        self.clearAll(elementId);
        arrayList.forEach(function (item) {
          let opt = document.createElement("option");
          let option = self.createElement(item, opt, properties);
          document.getElementById(elementId).appendChild(option);
        });
        result.message = "Success";
      } else {
        result.success = false;
        result.message = "Third parameter needs to be an object";
      }
    } else {
      result.success = true;
      result.message = "Empty Array";
    }
    if (fn !== undefined && typeof fn === "function") {
      fn(result);
    }
  };

  this.replaceFromPosition = function () {
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
      let properties = arguments[2];
      let startingPoint = arguments[3];
      if (typeof properties === "object" && properties !== fn) {
        let select = document.getElementById(elementId);
        let selectLength = select.options.length;
        if (startingPoint <= selectLength) {
          let amountToPop = selectLength - startingPoint;
          for (let i = 0; i < amountToPop; i++) {
            select.remove(startingPoint);
          }
          arrayList.forEach(function (item) {
            let opt = document.createElement("option");
            let option = self.createElement(item, opt, properties);
            document.getElementById(elementId).appendChild(option);
          });
          result.message = "Success";
        } else {
          result.success = false;
          result.message = "Theres no enough items in the select";
        }
      } else {
        result.success = false;
        result.message = "Third parameter needs to be an object";
      }
    } else {
      result.success = true;
      result.message = "Empty Array";
    }
    if (fn !== undefined && typeof fn === "function") {
      fn(result);
    }
  };

  this.clearAll = function (elementId) {
    let select = document.getElementById(elementId);
    select.options.length = 0;
  };

  this.createElement = function (item, opt, properties) {
    if (!(Object.keys(properties).length === 0 && properties.constructor === Object)) {
      if (typeof item === "string") {
        opt.text = item;
      } else {
        if (properties["id"] !== undefined && properties["id"] !== "")
          opt.id = item[properties["id"]];
        if (properties["text"] !== undefined && properties["text"] !== "")
          opt.text = item[properties["text"]];
        if (properties["value"] !== undefined && properties["value"] !== "")
          opt.value = item[properties["value"]];
        if (properties["title"] !== undefined && properties["title"] !== "")
          opt.title = item[properties["title"]] || properties["title"];
        if (properties["label"] !== undefined && properties["label"] !== "")
          opt.label = item[properties["label"]] || properties["label"];
        if (
          properties["disabled"] !== undefined &&
          properties["disabled"] !== ""
        )
          opt.disabled =
            item[properties["disabled"]] !== undefined
              ? !item[properties["disabled"]]
              : properties["disabled"];
        if (properties["class"] !== undefined && properties["class"] !== "")
          item[properties["class"]] !== undefined
            ? opt.classList.add(item[properties["class"]])
            : opt.classList.add(properties["class"]);
      }
    } else {
      opt.text = item;
    }
    return opt;
  };
}
const SELECT = new SelectServices();
