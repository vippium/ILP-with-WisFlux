// Program to print First 10 Odd Natural Numbers using While loop in reverse order using user input

#include <stdio.h>
#include <conio.h>

int main()
{
    int i = 1;
    int a;

    printf("Enter your number : ");
    scanf("%d", &a);

    while (i <= a)
    {
        printf("%d \n", 2*a+1 - 2*i);
        i++;
    }

    getch();
}
