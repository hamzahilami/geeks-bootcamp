class Family:
    
    def __init__(self, members=[{}], last_name):
        self.members = members
        self.last_name = str(last_name)

    def born(self, **child_name):
        for child in child_name:
            if child not in self.members:
                self.members.append(child_name[child])
                print(f"{child_name[child]} is born")
            else:
                print(f"{child_name[child]} is already in the family")



    

