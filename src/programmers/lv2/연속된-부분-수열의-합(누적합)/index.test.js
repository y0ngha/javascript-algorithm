import {logic} from "./index";

const TEST_CASE_1 = {
    sequence: [1, 2, 3, 4, 5],
    findNumber: 7,
    assert: [2, 3]
}

const TEST_CASE_2 = {
    sequence: [1, 1, 1, 2, 3, 4, 5],
    findNumber: 5,
    assert: [6, 6]
}

const TEST_CASE_3 = {
    sequence: [2, 2, 2, 2, 2],
    findNumber: 6,
    assert: [0, 2]
}


describe('JEST TEST', () => {
    it('TEST CASE 1', () => {
        expect(logic(TEST_CASE_1.sequence, TEST_CASE_1.findNumber)).toStrictEqual(TEST_CASE_1.assert)
    })
    it('TEST CASE 2', () => {
        expect(logic(TEST_CASE_2.sequence, TEST_CASE_2.findNumber)).toStrictEqual(TEST_CASE_2.assert)
    })
    it('TEST CASE 3', () => {
        expect(logic(TEST_CASE_3.sequence, TEST_CASE_3.findNumber)).toStrictEqual(TEST_CASE_3.assert)
    })
})
