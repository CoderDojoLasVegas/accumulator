var calculator = require('./calculator');
var prompt = require('prompt');

var run = function() {
    var show = true;
    var self = this;
    
    var accumulate = function(operation) {
        prompt.get(['number'], function(err, result){
            switch(operation) {
                case '+':
                    console.log('Accumulator: ' + calculator.add(result.number));
                    break;
                case '-':
                    console.log('Accumulator: ' + calculator.sub(result.number));
                    break;
                case '*':
                    console.log('Accumulator: ' + calculator.mul(result.number));
                    break;
                case '/':
                    console.log('Accumulator: ' + calculator.div(result.number));
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
                        accumulate(result.operation);
                        break;
                    default:
                        console.log("That is not an option, please try again.");
                        self.main();
                }
            });
    };
};

(new run()).main();