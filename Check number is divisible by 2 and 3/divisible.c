// Program to check whether the given number is divisible by 2 and 3 or not.

#include <stdio.h>
#include <conio.h>

int main()
{
    int a;

    printf("Enter a number: ");
    scanf("%d", &a);

    if(a % 2 == 0 & a % 3 == 0){
        printf("%d is divisible by 2 and 3", a);}
    else
        printf("%d is not divisible by 2 and 3", a);
        getch();
}
