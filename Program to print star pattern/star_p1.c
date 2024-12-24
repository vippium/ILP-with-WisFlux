// Program to print star pattern (reverse).

#include<stdio.h>

int main() {
int i,j,k;
    printf("Enter no. of lines: ");
    scanf("%d", &k);

    for(i=1; i<=k; i++)
    {
        for(j=1; j<=k; j++)
        {
            if(j<=k+1-i)
            printf("*");
        else
            printf(" ");
        }
        printf("\n");
    }
}
