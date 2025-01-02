#include <stdio.h>

int sum(int n)
    if (n == 1) {
        return 1;

        return (n + sum(n - 1));
    }

int main() {
    int num, result;

    printf("Enter a positive integer: ");
    scanf("%d", &num);

    if (num < 1) {
        printf("Invalid input. Please enter a positive integer.\n");
    } else {
        result = sum(num);
        printf("Sum of first %d natural numbers: %d\n", num, result);
    }

    return 0;
}
