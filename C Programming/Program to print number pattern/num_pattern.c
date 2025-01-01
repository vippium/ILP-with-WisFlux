// Program to print number pattern with user input.

#include<stdio.h>

int main() {
int i,j,k,m;
    printf("Enter no. of lines: ");
    scanf("%d", &k);

    for(i=1; i<=k; i++)
    {
        m = 1;
        for(j=1; j<=k; j++)
        {
            if(j<=k+1-i)
            printf("%d", m++);
        else
            printf(" ");
        }
        printf("\n");
    }
}
