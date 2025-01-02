#include<stdio.h>

int main ()
{
    int a;
    printf("Enter a number : ");
    scanf("%d", &a);
    switch(a)
    {
    case 21:
        printf("A\n");
    case 10:
        printf("P\n");
    case 97:
        printf("Q\n");
    default:
        printf("Default");

    }
}
