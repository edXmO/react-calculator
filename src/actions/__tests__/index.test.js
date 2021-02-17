import { equals, addOperator, del, decimal, display_screen, lastKey_pressed } from '../index';

// Testing every action

test('should payload be evaluated with math expression', () => {
    const payload = equals('5+3');
    expect(payload).toStrictEqual({ payload: 8, type: "EQUALS" });
});

test('should payload append operator', () => {
    const payload = addOperator('5+3', '/', 'Action');
    expect(payload).toStrictEqual({ type: "OPERATOR", payload: { result: '5+3/', type: 'Action' } });
});

test('should remove last character on screen', () => {
    const payload = del('5+3');
    expect(payload).toStrictEqual({ type: "DELETE", payload: '5+' });
});

test('should append decimal', () => {
    const payload = decimal('5+3', "Display");
    expect(payload).toStrictEqual({ type: "DECIMAL", payload: { updatedDisplay: '5+3.', type: "Display" } })
});

test('should update screen state', () => {
    const payload = display_screen('5+3', '*');
    expect(payload).toStrictEqual({ type: "DISPLAY_SCREEN", payload: '5+3*' });
});

test('should update lastKey and screen state', () => {
    const payload = lastKey_pressed('5+3', '2', 'Display');
    expect(payload).toStrictEqual({ type: "KEYNUMBER_PRESS", payload: { key: '2', type: 'Display', updatedKeyHistory: '5+32' } });
});




