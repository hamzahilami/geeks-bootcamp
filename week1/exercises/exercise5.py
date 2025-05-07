my_fav_numbers = set([2, 4, 6])
my_fav_numbers.add(8)
my_fav_numbers.add(0)
my_fav_numbers.pop()
print(my_fav_numbers)

friend_fav_numbers = {1, 3, 5, 9, 2}

our_fav_numbers = my_fav_numbers.copy()

for n in friend_fav_numbers:
  our_fav_numbers.add(n)

print(our_fav_numbers)

