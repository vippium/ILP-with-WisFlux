// Program to print alphabet pattern pattern with user input.

#include<stdio.h>

int main() {
int i,j,k, m;
    printf("Enter no. of lines: ");
    scanf("%d", &k);

    for(i=1; i<=k; i++)
    {
        m = 'A';
        for(j=10; j<=k; j--)
        {
            if(j<=k-1+i)
            printf("%c", m++);
        else
            printf(" ");
        }
        printf("\n");
    }
}
