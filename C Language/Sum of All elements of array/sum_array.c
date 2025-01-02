// Sum of elements in an array in c language

#include <stdio.h>

int main()
{
    int arr[] = {1, 22, 3, 4, 5};
    int sum = 0;
    int n = 5;


      for(int i = 0; i < n; i++) {
        sum = sum + arr[i];
    }

    printf("Sum of array elements: %d\n", sum);
    getch();

}
