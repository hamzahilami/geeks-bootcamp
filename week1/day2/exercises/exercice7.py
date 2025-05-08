import random

def get_random_number(season):
    if season == "winter":
        return random.randint(1, 10)
    elif season == "spring":
        return random.randint(11, 20)
    elif season == "summer":
        return random.randint(21, 30)
    elif season == "autumn":
        return random.randint(31, 40)
    else:
        return None
    

def main():
    temperature = get_random_number(season='winter')

    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temperature < 16:
        print("Quite chilly! Don’t forget your coat")
    elif temperature < 23:
        print("It's warm")
    elif temperature < 32:
        print("It's hot")
    else:
        print("It's boiling")

    print(f"Now the temperature is: {temperature} °C")

if __name__ == "__main__":
    main()