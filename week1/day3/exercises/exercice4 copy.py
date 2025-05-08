class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        self.animals.append(new_animal)
        print(f"{new_animal} has been added to the zoo.")

    def get_animals(self):
        print(self.animals)
        
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(animal_sold ," has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")
           
    def sort_animals(self):
        new_list = sorted(self.animals)
        print(new_list)
    
    def get_groups(self):
        groups = {}
        for animal in self.animals:
            if animal in groups:
                groups[animal] += 1
            else:
                groups[animal] = 1
        print(groups)







new_york_zoo = Zoo("new_york_zoo")
new_york_zoo.add_animal("lion")
new_york_zoo.add_animal("tiger")        
new_york_zoo.add_animal("bear")
new_york_zoo.add_animal("lion")         
new_york_zoo.add_animal("ape")
new_york_zoo.add_animal("elk")
new_york_zoo.get_animals()
new_york_zoo.sell_animal("lion")
new_york_zoo.get_animals()
new_york_zoo.sort_animals()
new_york_zoo.get_groups()
new_york_zoo.add_animal("ape")
new_york_zoo.add_animal("elk")
new_york_zoo.get_groups()
new_york_zoo.get_animals()
new_york_zoo.sort_animals()







