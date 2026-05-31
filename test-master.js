describe("Be the Test Master", () => {
  // Test #1
  //I: replace the ???
  //O: The value inputted should make the tests pass
  //C: n/a
  //E: n/a
  it("Our First Test: Replace the ??? to make the tests pass", function () {
    let stringValue = "I am a string";
    let numberValue = 484;

    assert.equal(stringValue, "I am a string")
    assert.equal(numberValue, 484);
  });

  // Test #2
  //I: a function that accesses a value outside of the function
//O: return a value that is outside of the function
//C: n/a
//E: n/a
  it("Functions can access/modify variables from a parent scope", () => {
    var outside_the_function = null;

    function yay() {
      var inside_the_function = "can you see me?";
      //By making outside = inside the function both should return "can you see me?"
      outside_the_function = inside_the_function;
    }

    yay();

    assert.equal(outside_the_function, "can you see me?");
  });

  // Test #3
  //I: a function with parameters that is scoped to that function
  //O: a value that is scoped to the function
  //C: n/a
  //E: n/a
  it("Function parameters become scoped to the function", () => {
    function yay(param) {
      assert.equal(param, "a fine kettle of fish");
    }

    yay("a fine kettle of fish");
  });

  // Test #4
   //I: a function with a local scope tht cannot be accessed by the outer scope
  //O: a value that is scoped to the function
  //C: n/a
  //E: n/a
  it("A functions local scope is not available in an outer scope.", () => {
    function yay() {
      var kix = "kid tested mother approved";
      assert.equal(kix, "kid tested mother approved");
    }
    yay();

    var has_kix;
    // NOTE:
    // "this" is a special object that by default represents the global scope.
    // variables declared globally are stored as a property on the object: this.<variable>
    // if the variable is not global then this.<variable> will be undefined
    if (this.kix !== undefined) {
      has_kix = kix;
    } else {
      has_kix = "i prefer cheerios";
    }
    assert.equal(has_kix, "i prefer cheerios");
  });

  // Test #5
   //I: a function with parameters that don't have access to each other's scope
  //O: a value that is scoped to their particular function
  //C: n/a
  //E: n/a
  it("Functions don't have access to each others scope", () => {
    function yay() {
      var from_yay = "i'm inside yay;";
    }

    function foo() {
      var in_foo = "i'm in foo";
      if (this.from_yay !== undefined) {
        in_foo = this.from_yay;
      }
      assert.equal(in_foo, "i'm in foo");
      assert.equal(this.from_yay, undefined);
    }
    yay();
    foo();
  });

  // Test #6
   //I: a function with inner scope variables overrides outter scope variables
  //O: a value that overrides the outer scope variable
  //C: n/a
  //E: n/a
  it("Inner scope variables override outter scope variables.", () => {
    var peanuts = 300;

    function yay() {
      var peanuts = "roasted";

      assert.equal(peanuts, "roasted");
    }
    yay();

    assert.equal(peanuts, 300);
  });

  // Test #7
   //I: a function with var in the function repeats its function
  //O: a value that is repeatable
  //C: n/a
  //E: n/a
  it("Variables created with var in a funtion are re-created each time", () => {
    function yay() {
      if (this.counter !== undefined) {
        counter = counter + 1;
      } else {
        var counter = 10;
      }
    }

    yay();
    assert.equal(this.counter, undefined);
    yay();
    assert.equal(this.counter, undefined);
    yay();
    assert.equal(this.counter, undefined);
  });

  // Test #8
   //I: a function.s inner scope can access the outer scope
  //O: return an outer scope value
  //C: n/a
  //E: n/a
  it("Inner scope can access outer scope", () => {
    var im_outside = "alpha";
    function yay() {
      var im_inside = "omega";
      return im_outside + im_inside;
    }

    assert.equal(yay(), "alphaomega");
  });

  // Test #9
   //I: a function that retains outer scope
  //O: a value that is scoped to the function
  //C: n/a
  //E: n/a
  it("Functions retain outer scope references between calls.", () => {
    var im_outside = 13;
    function yay() {
      im_outside += 1;
    }

    yay();
    assert.equal(im_outside, 14);
    yay();
    assert.equal(im_outside, 15);
  });

  // Test #10
   //I: a function that does goofy stuff with outer scope
  //O: a value that is goofy
  //C: n/a
  //E: n/a
  it("We can do goofy stuff with outer scope", () => {
    var hello = "greg";
    var name = "";

    function yay() {
      name += hello;
    }

    yay();
    assert.equal(name, "greg");
    yay();
    assert.equal(name, "greggreg");
    yay();
    assert.equal(name, "greggreggreg");
  });

  // Test #11
   //I: a function to other functions
  //O: run those functions
  //C: n/a
  //E: n/a
  it("We can pass functions to other functions and then run them.", () => {
    var im_outter = 10;
    function yay() {
      im_outter /= 5;
    }
    function something(whatever) {
      im_outter *= 20;
      whatever();
    }
    something(yay);
    assert.equal(im_outter, 40);
  });

  // Test #12
   //I: a function that gets crazy with returns
  //O: a value that is crazy
  //C: n/a
  //E: n/a
  it("We can get crazy with returns.", () => {
    function yay() {
      return " is dog";
    }
    function foo(whatever) {
      return "hello, this" + whatever();
    }
    assert.equal(foo(yay), "hello, this is dog");
  });
});
