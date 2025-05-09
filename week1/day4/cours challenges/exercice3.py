class Alien():
    def __init__(self, name, planet):
        self.name = name
        self.planet = planet

    def fly(self):
        print(self.name, 'is flying!')

    def sleep(self):
        print("Aliens don't sleep")

class Animal():
    def __init__(self, name):
        self.name = name

    def sleep(self):
        print("zzzZZZZZ")

class Dog(Animal):
    def bark(self):
        print(f"{self.name} barked, WAF !")

class AlienDog(Alien, Dog):
    def bark(self):
        print(f"{self.name} barked, 0ul10ul0u (that is how aliens Dogs bark..) !")


my_normal_Dog = Dog("Roger")
my_normal_Dog.sleep()
# >> zzzZZZZZ

my_normal_Dog.bark()
# >> Roger barked, WAF !

my_alien_Dog = AlienDog("Rex", "Neptune")
print(my_alien_Dog.planet)
# >> Neptune

my_alien_Dog.fly()
# >> Rex is flying!

my_alien_Dog.sleep()
# >> Aliens don not sleep

my_alien_Dog.bark()
# >> Rex barked, 0ul10ul0u (that is how aliens Dogs bark..) !
