var assert = require("assert");
var calculator = require("./calculator");
var run = require("./run");

describe('calculator', function(){
  
  describe('add', function(){
    
    it('should have a method add', function(){
        assert.equal(calculator.hasOwnProperty('add'), true)
    })
    
    it('should add two numbers', function(){
      assert.equal(calculator.add(5),5)
      assert.equal(calculator.add(5),10)
      assert.equal(calculator.add(-5),5)
      assert.equal(calculator.add(0),5)
      assert.equal(calculator.add(.5),5.5)
    })
    
  })
  
  describe('subtract', function(){
     
    it('should have a method sub', function(){
        assert.equal(calculator.hasOwnProperty('sub'), true)
    })
    
    it('should add two numbers', function(){
      assert.equal(calculator.sub(5),5)
      assert.equal(calculator.sub(5),0)
      assert.equal(calculator.sub(-5),5)
      assert.equal(calculator.sub(0),5)
      assert.equal(calculator.sub(.5),4.5)
    })
      
  })
  
  describe('multiply', function(){
    
    it('should have a method mul', function(){
        assert.equal(calculator.hasOwnProperty('mul'), true)
    })
    
    it('should add two numbers', function(){
      assert.equal(calculator.mul(5),5)
      assert.equal(calculator.mul(5),25)
      assert.equal(calculator.mul(-5),-125)
      assert.equal(calculator.mul(0),0)
      assert.equal(calculator.mul(.5),0)
    })
    
  })
  
  describe('divide', function(){
    
    it('should have a method div', function(){
        assert.equal(calculator.hasOwnProperty('div'), true)
    })
    
    it('should divide into numbers', function(){
      assert.equal(calculater.div(5),5)
      assert.equal(calculator.div(5),1)
      assert.equal(calculator.div(-5),-.2)
      assert.throws(calculator.div(0),function(err){
          return true
      })
      assert.equal(calculator.div(.5),.5)
    })
  })
  
  describe('clear', function(){
      
    it('should have a method clear', function(){
        assert.equal(calculator.hasOwnProperty('clear'), true)
    })
    
    it('should clear accumulator', function(){
        assert.equal(calculator.add(5),5)
        assert.equal(calculator.div(5),1)
        assert.equal(calculator.mul(5),5)
        assert.equal(calculator.sub(1),4)
        assert.equal(calculator.clear(),null)
    })
  })
  
})