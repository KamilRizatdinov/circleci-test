const first = require('../utils/first');

jest.setTimeout(5000);

[...new Array(20)].forEach((_, i) => {
  test(`something ${i}`, async () => {
    await new Promise((r) => setTimeout(r, 1000));
    expect(first()).toBe("first");
  });
})