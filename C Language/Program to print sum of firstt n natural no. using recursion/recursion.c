#include <stdio.h>

int main() {
    printf("Enter value of n : ");
    scanf("%d", &n);

    int sum(int n)
    {
        if (n==1)
            return 1;
        return (n + sum(n-1));
    }

}
