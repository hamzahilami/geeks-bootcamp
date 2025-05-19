import random

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu",
        "wrong_answers": ["Yodito", "Gronk"]
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine",
        "wrong_answers": ["Hoth", "Dagobah"]
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977",
        "wrong_answers": ["1983", "1969"]
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker",
        "wrong_answers": ["Obi-Wan Kenobi", "Luke Skywalker"]
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader",
        "wrong_answers": ["Kylo Ren", "Mace Windu"]
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee",
        "wrong_answers": ["Ewok", "Twi'lek"]
    }
]

def quiz():
    score = 0
    incorrect_answers = 0
    print("Answer the question by choosing the number of the correct answer.")
    
    for item in data:
        answers = [item["answer"]] + item["wrong_answers"]
        random.shuffle(answers)
        correct_answer = answers.index(item["answer"])

        print(f"\n- {item['question']}")
        for index, answer in enumerate(answers):
            print(f"{index + 1} - {answer}")
        
        try:
            choice = int(input("Your answer: "))
            if choice == correct_answer + 1:
                print("Correct!")
                score += 1
            else:
                print(f"Wrong answer. The correct answer is: {answers[correct_answer]}")
                incorrect_answers += 1
        except ValueError:
            print("Invalid input. Please enter a number.")
            incorrect_answers += 1

        if incorrect_answers == 3:
            print("\nYou've made 3 incorrect answers.")
            try:
                play_again = int(input("Do you want to play again?\n1 - Yes\n2 - No\nYour choice: "))
                if play_again == 1:
                    return quiz()
                else:
                    print("Thanks for playing!")
                    return
            except ValueError:
                print("Invalid input. Exiting game.")
                return

    print(f"\nYou finished the quiz.\nYou got {score} correct answers and {incorrect_answers} incorrect answers.")

quiz()
