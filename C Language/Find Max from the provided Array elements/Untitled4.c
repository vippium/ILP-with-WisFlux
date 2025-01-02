// Program to find maximum of array elements

#include <stdio.h>

int main() {
    int n = 5, i;

    int arr[] = {1, 2, 3, 44, 5};

    int max = arr[0];

    for(i = 1; i < n; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    printf("The maximum element is: %d\n", max);

    return 0;
}
