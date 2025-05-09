class phone:
    def __init__(self, phone_number):
        self.message = []
        self.phone_number = phone_number
        self.call_history = []

    def call(self, other_phone):

        self.other_phone = other_phone
        self.call_history.append(other_phone.phone_number)
        print(f"Calling {other_phone.phone_number}  you")
    def show_call_history(self):
        print("Call history:")
        for number in self.call_history:
            print(number)
    
    def send_message(self, other_phone, content):
       
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.message.append(message)
        print(f"Message sent to {other_phone.phone_number}: {content}")

        



caller = phone("123456789")
caller2 = phone("987654321")
caller3 = phone("456789123")
caller.call(caller)
caller.call(caller2)
caller.call(caller3)
caller.show_call_history()
caller.send_message(caller2, "Hello!")

