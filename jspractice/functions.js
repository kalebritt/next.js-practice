// When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called. Parameters are treated like variables within a function.

function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Cole");

//return statement
function monitorCount(rows, columns) {
    return rows * columns
  }
  
  const numOfMonitors = monitorCount(5,4)
  console.log(numOfMonitors)