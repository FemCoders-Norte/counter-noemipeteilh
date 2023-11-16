import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { add, reset, decrease } from "../src/js/counter";

describe("counter test", () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
  });

  it("should init to 0", () => {
    expect(document.getElementById("number").innerHTML).toBe("0");
  });

  it("should increment to 1", () => {
    add();
    expect(document.getElementById("number").innerHTML).toBe("1");
  });

  it("should reinit to 0", () => {
    const button = document.getElementById("reset");
    reset();
    expect(document.getElementById("number").innerHTML).toBe("0");
  });

  it("should decrese in 1", () => {
    decrease();
    expect(document.getElementById("number").innerHTML).toBe("0");
  });
});
