class Cat: 
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Mittens", 2)
cat2 = Cat("Whiskers", 3)
cat3 = Cat("Fluffy", 1)

# FUNCTION 1: find the oldest cat
def find_oldest_cat(cats):
    oldest_cat = cats[0]
    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    print(f"The oldest cat is {oldest_cat.name},and is {oldest_cat.age} years old.")


find_oldest_cat([cat1, cat2, cat3])   #ask why about this line (why you have to put the list in the function)


