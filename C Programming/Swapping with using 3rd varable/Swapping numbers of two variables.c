// Program to swap two numbers

#include<stdio.h>
#include<conio.h>

int main() {
int a,b,c;
printf("Enter value of A : ", a);
scanf("%d", &a);
printf("Enter value of B : ", b);
scanf("%d", &b);

c = a;
a = b;
b = c;

printf("After swapping, Value of A is : %d", a);
printf("\nAfter swapping, Value of B is : %d", b);

}
