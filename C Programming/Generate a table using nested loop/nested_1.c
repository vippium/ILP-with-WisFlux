// Write a program to generate a table chart using nested loop

#include <stdio.h>

 int main() {
     int i, j;
    for(i=1; i<=10; i++)
    {
        for(j=1; j<=10; j++)
        {
            printf("%d ", j*i);
        }
        printf("\n");
    }
 }
