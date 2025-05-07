# Initialize an empty dictionary
entries = {}

while True:
    # Ask for user input
    key = input("Enter a key (or type 'quit' to stop): ")
    if key.lower() == 'quit':
        break
    value = input(f"Enter a value for '{key}': ")
    entries[key] = value

# Display the final dictionary
print("Final dictionary:", entries)