import random

class MyList:
    def __init__(self):
        self.letters = []

    def reverse(self):
        self.letters.reverse()
        print(self.letters)

    def sort(self):
        new_list = sorted(self.letters)
        self.letters = new_list
        print(self.letters)

    def generate_random_list(self):
        random_list = [random.randint(0, 100) for _ in range(len(self.letters))]
        print(random_list)


list1 = MyList()
list1.letters = ['d','f','v','u','i','a','z','l','r']
list1.reverse()
list1.sort()
list1.generate_random_list()

