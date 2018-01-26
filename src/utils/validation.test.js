import { required, maxLength } from "./validation";

describe("required", () => {
  it("returns undefined for non-empty string", () => {
    expect(required("str")).toBe(undefined);
  });

  it("returns 'Required' for empty string", () => {
    expect(required(" ")).toBe("Required");
  });

  it("returns 'Required' for undefined", () => {
    expect(required(undefined)).toBe("Required");
  });
});

describe("maxLength", () => {
  it("returns undefined for valid string", () => {
    expect(maxLength(4)("stri")).toBe(undefined);
  });

  it("returns error message for invalid string", () => {
    expect(maxLength(4)("string")).toBe("Must be 4 characters");
  });

  it("returns undefined for undefined", () => {
    expect(maxLength(4)(undefined)).toBe(undefined);
  });
});
