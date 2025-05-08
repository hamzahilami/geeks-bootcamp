class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal):
        self.animals.append(new_animal)
    
    
    def get_animals(self):
        for animal in self.animals:
            print(animal)

    