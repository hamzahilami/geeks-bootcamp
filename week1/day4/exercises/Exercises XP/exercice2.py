import random

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking"
        
    

    def runnning_speed(self):
        print(f"{self.name} is running {self.weight/self.age*10} km/h")
    

    def fight(self,other_Dog):
        if self.weight > other_Dog.weight:
            print(f"{self.name} wins the fight against {other_Dog.name}")
        elif self.weight < other_Dog.weight:
            print(f"{other_Dog.name} wins the fight against {self.name}")  
        else:
            print(f"{self.name} and {other_Dog.name} are equal in weight, it's a draw")



# Dog1 = Dog("Dog1", 2, 20)
# Dog2 = Dog("Dog2", 3, 30)
# Dog3 = Dog("Dog3", 4, 40)
# Dog1.bark()
# Dog2.bark()
# Dog2.runnning_speed()
# Dog1.fight(Dog2)



        
    