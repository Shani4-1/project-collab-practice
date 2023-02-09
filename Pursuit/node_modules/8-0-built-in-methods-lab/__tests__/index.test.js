const {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
} = require("../");

// Example data
const assignments = {
  quizzes: [
    { title: "Arrays", score: { received: 4, max: 5 } },
    { title: "Objects", score: { received: 5, max: 6 } },
    { title: "Loops", score: { received: 2, max: 4 } },
  ],
  labs: [
    { title: "Arrays", score: { received: 0, max: 1 } },
    { title: "Objects", score: { received: 1, max: 1 } },
    { title: "Loops", score: { received: 1, max: 1 } },
  ],
  projects: [
    { title: "Music Box", score: { received: 14, max: 18 } },
    { title: "Calculator", score: { received: 12, max: 12 } },
  ],
};

describe("getAssignmentTypes()", () => {
  test("should return all of the keys of the object inserted", () => {
    const actual = getAssignmentTypes(assignments);
    const expected = ["quizzes", "labs", "projects"];
    expected.forEach((quiz) => {
      expect(actual).toContain(quiz);
    });
  });

  test("should return all keys regardless of the object", () => {
    const actual = getAssignmentTypes({ A: 10, B: 20, C: 30 });
    const expected = ["A", "B", "C"];
    expected.forEach((quiz) => {
      expect(actual).toContain(quiz);
    });
  });
});

describe("getPercentageScore()", () => {
  test("should return an integer as a percentage, representing the score", () => {
    const score = assignments.labs[1].score;
    const actual = getPercentageScore(score);
    const expected = 100;
    expect(actual).toEqual(expected);
  });

  test("should round up if needed", () => {
    const score = assignments.projects[0].score;
    const actual = getPercentageScore(score);
    const expected = 78;
    expect(actual).toEqual(expected);
  });

  test("should round down if needed", () => {
    const score = assignments.quizzes[1].score;
    const actual = getPercentageScore(score);
    const expected = 83;
    expect(actual).toEqual(expected);
  });
});

describe("getHighestOfTwoScores()", () => {
  test("should return the highest percentage value from two scores", () => {
    const actual = getHighestOfTwoScores(
      assignments.labs[0].score,
      assignments.labs[1].score
    );
    const expected = 100;
    expect(actual).toEqual(expected);
  });

  test("should return the highest percentage rounded down", () => {
    const actual = getHighestOfTwoScores(
      assignments.quizzes[0].score,
      assignments.quizzes[1].score
    );
    const expected = 83;
    expect(actual).toEqual(expected);
  });

  test("should return the highest percentage rounded up", () => {
    const actual = getHighestOfTwoScores(
      assignments.projects[0].score,
      assignments.projects[1].score
    );
    const expected = 100;
    expect(actual).toEqual(expected);
  });
});
