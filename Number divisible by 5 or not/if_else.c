// Program to check whether given number is divisible by 5 or not.
#include<stdio.h>
#include<conio.h>

int main() {
    int a;

    printf("Enter a number to check divisibility by 5 : ");
    scanf("%d", &a);

        if (a % 5 == 0){
            printf("Number is divisible by 5");
        }
        else
            printf("Number is not divisible by 5");

}
