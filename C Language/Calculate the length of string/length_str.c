#include <stdio.h>

int main() {
    char str[10] = {'J','A','I','P','U','R'};
    int i;
    for(i=0; str[i]; i++);
    printf("Length of String is %d", i);

}
