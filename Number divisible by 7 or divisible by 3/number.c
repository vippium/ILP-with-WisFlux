// Program to check whether the given number is either divisible by 3 or 7 or not.

#include <stdio.h>
#include <conio.h>

int main()
{
    int a;

    printf("Enter a number: ");
    scanf("%d", &a);

    if(a % 3 == 0 || a % 7 == 0)
        printf("Number is divisible");
    else
        printf("\nNumber is not divisible");

    getch();
}
