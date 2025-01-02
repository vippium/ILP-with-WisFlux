#include <stdio.h>

int main() {
    char str[50];
        printf("Enter something you want : ");
    gets(str);
    int i;
    for(i=0; str[i]; i++);
    printf("Length of String is %d", i);

}
