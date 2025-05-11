import random


class Game:
    def __init__(self):
        self.user_score = 0
        self.computer_score = 0

    def get_user_item(self):
        valid_items = ['r', 'p', 's']
        while True:
            user_input = input("Please select an item (r for rock, p for paper, s for scissors): ").lower()
            if user_input in valid_items:
                return user_input
            else:
                print("Invalid choice. Please try again.")

    def get_computer_item(self):
        items = ['r', 'p', 's']
        return random.choice(items)
    
    def get_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "It's a tie!"
        elif (user_item == 'r' and computer_item == 's') or \
             (user_item == 'p' and computer_item == 'r') or \
             (user_item == 's' and computer_item == 'p'):
            self.user_score += 1
            return "You win!"
        else:
            self.computer_score += 1
            return "Computer wins!"
        
    def play(self): 
        while True:
            user_item = self.get_user_item()
            computer_item = self.get_computer_item()
            print(f"Computer selected: {computer_item}")
            result = self.get_result(user_item, computer_item)
            print(result)
            print(f"Score - You: {self.user_score}, Computer: {self.computer_score}")
            
            play_again = input("Do you want to play again? (yes/no): ").lower()
            if play_again != 'yes':
                break
