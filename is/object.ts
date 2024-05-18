/**
 * Проверяет что значения является объектом
 */

export function isObject(test: any): test is Record<any, any> {
    return typeof test === "object" && test !== null;
}
