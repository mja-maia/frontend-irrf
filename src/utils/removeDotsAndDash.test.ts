import { removeDotsAndDash } from "./removeDotsAndDash";

describe("removeDotsAndDash", () => {
  it("Deve remover todos os pontos e traços de strings", () => {
    expect(removeDotsAndDash("111.111.111-11")).toBe("11111111111");
  });
});
