#include <stdio.h>

int main() {
    int arr[] = {12, 45, 23, 67, 34};
    int n = 5;
    int max = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    printf("The maximum value in the array is: %d \n", max);

    return 0;
}
