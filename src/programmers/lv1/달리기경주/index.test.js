import {logic} from "./index";

const PLAYERS = ["mumu", "soe", "poe", "kai", "mine"];
const CALLINGS = ["kai", "kai", "mine", "mine"];
const RESULT = ["mumu", "kai", "mine", "soe", "poe"];

describe('달리기 경주', () => {
    it('TEST_CASE_1', () => {
        expect(logic(PLAYERS, CALLINGS)).toStrictEqual(RESULT)
    })
})
