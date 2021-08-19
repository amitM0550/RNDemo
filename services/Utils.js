export function checkSuccessRequestCode(code) {
    return [200, 201, 202, 203, 204].includes(code);
}