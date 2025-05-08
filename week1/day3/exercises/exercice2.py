class dog():
    def __init__(self, name, heigh):
        self.name = name
        self.heigh = heigh
    def bark(self):
        print("Woof! Woof!")

    def jump(self):
        print(f"{self.name} jumps {self.heigh*2} cm high!")


david_dog = dog("rex", 50)

print(f"Dog name: {david_dog.name}, height: {david_dog.heigh} cm")
david_dog.bark()
david_dog.jump()

sarahs_dog = dog("teacup", 20)
print(f"Dog name: {sarahs_dog.name}, height: {sarahs_dog.heigh} cm")
sarahs_dog.bark()
sarahs_dog.jump()


if david_dog.heigh > sarahs_dog.heigh:
    print(f"{david_dog.name} is bigger than {sarahs_dog.name}")
elif david_dog.heigh < sarahs_dog.heigh:
    print(f"{sarahs_dog.name} is bigger than {david_dog.name}")
else:
    print(f"{david_dog.name} and {sarahs_dog.name} are the same size")