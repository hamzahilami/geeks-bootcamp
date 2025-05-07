import random
user_input = int(input("Enter a number betwene 1 and 100 "))
computer_input = random.randint(1,100)
if 1 <= user_input <= 100:
        if user_input == computer_input:
            print("You win!")
        elif user_input != computer_input:
            print(computer_input, "is the number")
            print(user_input,"is your number")
            print("You lose!")
else:
    print("The number is not between 1 and 100")

