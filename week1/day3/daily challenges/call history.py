class phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []

    def call(self, other_phone):

        self.other_phone = other_phone
        self.call_history.append(other_phone.phone_number)
        print(f"Calling {other_phone.phone_number}  you")



caller = phone("123456789")
caller.call(caller)
    

