class Dog():
    def __init__(self, name, heigh):
        self.name = name
        self.heigh = heigh
    def bark(self):
        print("Woof! Woof!")

    def jump(self):
        print(f"{self.name} jumps {self.heigh*2} cm high!")


david_Dog = Dog("rex", 50)

print(f"Dog name: {david_Dog.name}, height: {david_Dog.heigh} cm")
david_Dog.bark()
david_Dog.jump()

sarahs_Dog = Dog("teacup", 20)
print(f"Dog name: {sarahs_Dog.name}, height: {sarahs_Dog.heigh} cm")
sarahs_Dog.bark()
sarahs_Dog.jump()


if david_Dog.heigh > sarahs_Dog.heigh:
    print(f"{david_Dog.name} is bigger than {sarahs_Dog.name}")
elif david_Dog.heigh < sarahs_Dog.heigh:
    print(f"{sarahs_Dog.name} is bigger than {david_Dog.name}")
else:
    print(f"{david_Dog.name} and {sarahs_Dog.name} are the same size")