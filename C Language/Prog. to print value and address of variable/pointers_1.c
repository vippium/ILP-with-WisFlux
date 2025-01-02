#include <stdio.h>

int main() {
    int x = 5;
    int j;

    j = &x;

    printf("%d%d%d, j, &x, x");
    printf("%d%d%d, *j, *&x, &j");
}
