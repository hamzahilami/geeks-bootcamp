#exercises 1
name = input("Enter your name: ")
if len(name) < 5:
    print('You have a short name :)')
else:
    print('You have a long name :)')

#exercises 2

num = int(input("Enter a number between 1 and 100: "))

if num % 3 == 0 and num % 5 == 0:
    print("FizzBuzz")
elif num % 3 == 0:
    print("Fizz")
elif num % 5 == 0:
    print("Buzz")
