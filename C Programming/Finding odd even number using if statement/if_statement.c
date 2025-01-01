//Prog. to check given number is even or odd

#include<stdio.h>
#include<conio.h>

int main() {
    int a;
    printf("Enter a number: ", a);
    scanf("%d", &a);

    if (a % 2 == 0){
        printf("Number is even");
    }
    if (a % 2 ! = 0){
        printf("Number is odd");
    }
}
