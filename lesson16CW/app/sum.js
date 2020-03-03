export function sum(...nums) {
    if (nums.length === 0) {
        return {
            status: 'failed',
            description: 'No arguments'
        }
    }
    return nums.reduce((p, el) => {
        if (!isNaN(el) && typeof el === 'number') {
            return p + el;
        } else {
            return p;
        }
    }, 0)
}