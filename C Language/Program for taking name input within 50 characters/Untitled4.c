#include <stdio.h>

int main() {
    char str[50];

    printf("Enter something you want : ");
    fgets(str,50,stdin);

    printf("%s", str);
}
