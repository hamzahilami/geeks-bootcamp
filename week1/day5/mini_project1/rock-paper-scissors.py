from game import Game

def get_user_menu_choice():
    """
    Display a menu, get the user’s choice with validation, and return the choice.
    """
    print("Menu:")
    print("g. Play a new game")
    print("x. view scores and quit")
    
    while True:
        choice = input("Enter your choice (g/x): ").strip().lower()
        if choice in ['g', 'x']:
            return choice
        else:
            print("Invalid choice. Please enter 'g' or 'x'.")

def print_results(results):
    print("\nGame Results:")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("Thank you for playing!")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == 'g':  # Play a new game
            game = Game()
            result = game.play()
            if result in results:
                results[result] += 1
        elif choice == 'x':  # Show scores and quit
            print_results(results)
            break

if __name__ == "__main__":
    main()
