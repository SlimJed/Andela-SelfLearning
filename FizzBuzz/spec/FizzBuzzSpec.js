var MyApp = require('../src/FizzBuzz.js');

describe("Fizz Buzz tests ", function() {
  
  it("should return `Fizz` for number divisible by 3", function() {
    expect(MyApp.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Fizz` for number divisible by 3", function() {
    expect(MyApp.fizzBuzz(27)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(MyApp.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(MyApp.fizzBuzz(50)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(MyApp.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(MyApp.fizzBuzz(60)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(MyApp.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(MyApp.fizzBuzz(120)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(MyApp.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(MyApp.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(MyApp.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(MyApp.fizzBuzz(101)).toBe(101);
  });

});