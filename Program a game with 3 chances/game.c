// Program a game in which user has to enter an even number to win the game with 3 chances.


#include <stdio.h>

int main() {
    int x, i;
for (i=1; i<=3; i++) {
    printf("Enter an even number : ");
    scanf("%d", &x);
    if(x%2==0)
        break;
}
if(i==4)
    printf("Game Over");
else
    printf("You Won");
}
