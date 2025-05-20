class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['name']} is born into the {self.last_name} family.")

    def family_presentation(self):
        print(f"Family: {self.last_name}")
        for member in self.members:
            print(member)

class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] > 18:
                    print(f"{member['incredible_name']} can {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old and cannot use their power yet.")
                return
        print(f"No member named {name} found.")

    def incredible_presentation(self):
        print("Here is our powerful family **")
        super().family_presentation()

incredible_family = TheIncredibles(
    last_name="Incredibles",
    members=[
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ]
)

incredible_family.incredible_presentation()

incredible_family.born(
    name='Jack',
    age=1,
    gender='Male',
    is_child=True,
    power='Unknown Power',
    incredible_name='BabyJack'
)

incredible_family.incredible_presentation()
