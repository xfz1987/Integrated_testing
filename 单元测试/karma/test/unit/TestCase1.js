describe("A suite", function() {
    it("contains spec with an expectation", function() {
        console.log("This is msg from log...");
        expect(true).toBe(true);
    });
});

describe("A suite of basic functions", function() {
    it("reverse word", function() {
        expect("DCBA").toEqual(reverse("ABCD"));
        expect("damo").toEqual(reverse("omad1"));
    });
});
/**
 * describe(string,function(){});//这个函数表示分组，也就是一组测试用例
 * it(string,function(){});//这个函数表示常熟市用例
 * expect(expression)表示期望expression这个表达式具有某个值或者具有某种行为
 * toXXX();这个寒素表示匹配
 */