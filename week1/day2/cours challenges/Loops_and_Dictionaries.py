
entries = {}

while True:
    key = input("Enter a key (or type 'quit' to stop): ")
    if key.lower() == 'quit':
        break
    value = input(f"Enter a value for '{key}': ")
    entries[key] = value

print("Final dictionary:", entries) 