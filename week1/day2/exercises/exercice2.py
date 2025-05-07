# Exercise 2: 

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

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
