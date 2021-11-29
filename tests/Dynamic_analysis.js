import Iroh from 'iroh'
import Calculator from "../public/calculator.js"

let stage = new Iroh.Stage(`
var calculator = new Calculator()
calculator.computeOperation('+', 1, 2);
`);

// function call
stage.addListener(Iroh.CALL)
    .on("before", (e) => {
        let external = e.external ? "#external" : "";
        console.log(" ".repeat(e.indent) + "call", e.name, external, "(", e.arguments, ")");
        //console.log(e.getSource());
    })
    .on("after", (e) => {
        let external = e.external ? "#external" : "";
        console.log(" ".repeat(e.indent) + "call", e.name, "end", external, "->", [e.return]);
        //console.log(e.getSource());
    });

eval(stage.script);

let stage2 = new Iroh.Stage(`
    var calculator = new Calculator()
    calculator.computeOperation('*', 10, 2);
`);

// function call
stage2.addListener(Iroh.CALL)
    .on("before", (e) => {
        let external = e.external ? "#external" : "";
        console.log(" ".repeat(e.indent) + "call", e.name, external, "(", e.arguments, ")");
        //console.log(e.getSource());
    })
    .on("after", (e) => {
        let external = e.external ? "#external" : "";
        console.log(" ".repeat(e.indent) + "call", e.name, "end", external, "->", [e.return]);
        //console.log(e.getSource());
    });

eval(stage2.script);


let stage3 = new Iroh.Stage(`
    var calculator = new Calculator();
    calculator.getDisplayNumber(2);
`);

// function call
stage3.addListener(Iroh.CALL)
    .on("before", (e) => {
        let external = e.external ? "#external" : "";
        console.log(" ".repeat(e.indent) + "call", e.name, external, "(", e.arguments, ")");
        //console.log(e.getSource());
    })
    .on("after", (e) => {
        let external = e.external ? "#external" : "";
        console.log(" ".repeat(e.indent) + "call", e.name, "end", external, "->", [e.return]);
        //console.log(e.getSource());
    });

eval(stage3.script);


// program
stage.addListener(Iroh.PROGRAM)
.on("enter", (e) => {
  console.log(" ".repeat(e.indent) + "Program");
})
.on("leave", (e) => {
  console.log(" ".repeat(e.indent) + "Program end", "->", e.return);
});

eval(stage.script);