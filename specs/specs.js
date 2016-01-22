describe('countUpTo', function() {
  it("returns 'ping-pong' for a number that's divisible by both 3 and 5, 'pong' for a number divisible by 5, and 'ping' for a number divisible by 3", function() {
    expect(countUpTo(15)).to.equal[[1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'pingpong']];
  })
});

describe('wrongInput', function() {
  it("returns an invalid input message if the number is less than or equal to 0", function() {
    expect(wrongInput(-3)).to.equal("Please enter a number greater than 0");
  })
});
