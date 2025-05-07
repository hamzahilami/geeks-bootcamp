# Exercise 2: Bonus 
family = {}
while True:
    name = input("Enter a family member's name (or type 'done' to finish): ").strip()
    if name.lower() == 'done':
        break
    age = int(input(f"Enter {name}'s age: ").strip())
    family[name] = age

total_cost = 0
for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name.capitalize()} has to pay ${cost}.")
    total_cost += cost
print(f"The family's total cost for the movies is ${total_cost}.")