function addStrings(num1: string, num2: string): string {
    let p1 = num1.length - 1, p2 = num2.length - 1;
    const res = [];
    let carry = 0;

    while (p1 >= 0 || p2 >= 0 || carry > 0) {
        const n1 = p1 >= 0 ? Number(num1[p1]) : 0;
        const n2 = p2 >= 0 ? Number(num2[p2]) : 0;
        const sum = n1 + n2 + carry;
        carry = sum >= 10 ? 1 : 0;
        res.push(sum % 10);
        p1--;
        p2--;
    }
    return res.reverse().join('')
};