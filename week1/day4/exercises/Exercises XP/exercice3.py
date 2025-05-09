from exercice2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *names):
        print(f"{names} are playing together")

    def do_a_trick(self):
        list_of_tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        if self.trained:
            print(f"{self.name} {list_of_tricks[random.randint(0, 3)]}")
          


Dog1 = PetDog("Dog1", 2, 20)
Dog2 = PetDog("Dog2", 3, 30)


Dog1.train()
print(Dog1.trained)
Dog1.do_a_trick()

