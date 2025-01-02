#include <stdio.h>

int main() {

int x, y;

    for(x=1, y=10; x<y; x++, y--)
    {
        if(x==y)
        break;
        printf("%d", x+y);
    }
    }
