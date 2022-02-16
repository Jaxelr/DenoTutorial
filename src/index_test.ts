import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
 
Deno.test("Multiply two numbers", () => {
  const ans = 2 * 2;
  assertEquals(ans, 4);
});

Deno.test({
    name: "Multiply three numbers",
    fn() {
      const ans = 2 * 2 * 2;
      assertEquals(ans, 8);
    },
  });