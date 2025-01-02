// Program to swap two numbers without using Third variable.

#include<stdio.h>
#include<conio.h>

int main() {
int a,b,c;
printf("Enter value of A : ", a);
scanf("%d", &a);
printf("Enter value of B : ", b);
scanf("%d", &b);

a = a + b;
b = a - b;
a = a - b;
printf("After swapping, Value of A is : %d", a);
printf("\nAfter swapping, Value of B is : %d", b);

}
