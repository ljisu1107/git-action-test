import sum from "./sum";

test("1+2는 3 확인",()=>{
  expect(sum(1,2)).toBe(3);
});