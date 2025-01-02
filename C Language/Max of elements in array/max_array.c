// Max of elements in an pre-defined array in c language

#include <stdio.h>

int main()
{
    int arr[] = {1, 2, 3, 4, 55};
    int max = arr[5];
    int n = 5;
    int a;

    for(a = 1; a < n; a++) {
        if(arr[a] > max) {
            max = arr[a ];
    }
    printf("Max of array elements: %d \n", max);

}
}
