var calculator = require('./calculator');
var prompt = require('prompt');

var run = function() {
    var show = true;
    var self = this;
    
    var accumulate = function() {
        prompt.get(['number'], function(err, result){
            switch(result.number) {
                case '+':
                    console.log('Accumulator: ' + calculator.add(operation.number));
                    break;
                case '-':
                    console.log('Accumulator: ' + calculator.sub(operation.number));
                    break;
                case '*':
                    console.log('Accumulator: ' + calculator.mul(operation.number));
                    break;
                case '/':
                    console.log('Accumulator: ' + calculator.div(operation.number));
                    break;
            }
            self.main();
        });
    };
    
    this.main = function() {

            if(show) {
                console.log("******************************************");
                console.log("* Choose an option:                       ");
                console.log("* +                                       ");
                console.log("* -                                       ");
                console.log("* *                                       ");
                console.log("* /                                       ");
                console.log("* s (show available operations)           ");
                console.log("* h (hide options menu)                   ");
                console.log("* c (clear accumulator)                   "); 
                console.log("* q (to quit)                             ");
                console.log("******************************************");
            }
            
            prompt.get(['operation'], function(err, result){
                switch(result.operation) {
                    case 'c':
                        calculator.clear();
                        console.log('Accumulator Cleared');
                        self.main();
                        break;
                    case 'q':
                        console.log("Thank You For Playing!!!");
                        break;
                    case 's':
                        show = true;
                        self.main();
                        break;
                    case 'h':
                        show = false;
                        self.main();
                        break;
                    case '+':
                    case '-':
                    case '*':
                    case '/':
                        accumulate();
                        break;
                    default:
                        console.log("That is not an option, please try again.");
                        self.main();
                }
            });
    };
};

(new run()).main();