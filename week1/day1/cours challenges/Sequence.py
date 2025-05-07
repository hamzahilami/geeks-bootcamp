list1 = [5, 10, 15, 20, 25, 50, 20]

num = int(input("Give a number: "))

if num in list1:
    index = list1.index(num)
    list1[index] = 200
else:
    print("Does not exist")

print(list1)

