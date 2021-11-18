const second = require('../utils/second');

jest.setTimeout(5000);

[...new Array(20)].forEach((_, i) => {
  test(`something ${i}`, async () => {
    await new Promise((r) => setTimeout(r, 1000));
    expect(second()).toBe("second");
  });
})