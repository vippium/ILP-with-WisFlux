// Program to check whether the given number is positive or non positive

#include<stdio.h>
#include<conio.h>

int main() {
    int a;
    printf("Enter a number: ", a);
    scanf("%d", &a);

    if (a > 0){
        printf("Number is positive");
    }
    if (a <= 0){
        printf("Number is non-positive");
    }
}
