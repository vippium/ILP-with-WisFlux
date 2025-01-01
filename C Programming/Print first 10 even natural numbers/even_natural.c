// Program to print First 10 Even Natural Numbers using While loop

#include <stdio.h>
#include <conio.h>

int main()
{
    int i = 1;

    while (i <= 10) {
        printf("%d \n", i*2);
        i++;
    }

    getch();
}
