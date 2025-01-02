// Program to print numbers from 0 to 10 and 10 to 0 using two while loops.

#include <stdio.h>

int main() {
    int i = 0;

    printf("Numbers from 0 to 10 are : ");
    while (i <= 10) {
        printf("%d ", i);
        i++;
    }

    printf("\nNumbers from 10 to 0 are : ");
	while (i >= 0) {
        printf("%d ", i);
        i--;
    }
}
