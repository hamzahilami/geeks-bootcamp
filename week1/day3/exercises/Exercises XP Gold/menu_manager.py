class Menu_manager:
    def __init__(self):
        self.menu = [
            {"name": "Soup",
             "price": 10,
             "spice_level": "B",
             "gluten_index": False},
            {"name": "Hamburger",
             "price": 15, 
             "spice_level": "A", 
             "gluten_index": True},
        ]
    
    def add_item(self, name, price, spice_level, gluten_index):
        new_item = {
            "name": name,
            "price": price,
            "spice_level": spice_level,
            "gluten_index": gluten_index
        }
        self.menu.append(new_item)
        print(f"{name} has been added to the menu.")

    def update_item(self, name, price=None, spice_level=None, gluten_index=None):
        for item in self.menu:
            if item["name"] == name:
                if price is not None:
                    item["price"] = price
                if spice_level is not None:
                    item["spice_level"] = spice_level
                if gluten_index is not None:
                    item["gluten_index"] = gluten_index
                print(f"{name} has been updated.")
                return
        print(f"{name} not found in the menu.")
    
    def remove_item(self, name):
        for item in self.menu:
            if item["name"] == name:
                self.menu.remove(item)
                print(f"{name} has been removed from the menu.")
                return
        print(f"{name} not found in the menu.")




item = Menu_manager()
item.add_item("Pizza", 12, "A", True)
item.update_item("Pizza", price=14, spice_level="B")
item.remove_item("Pizza")
item.add_item("Pasta", 10, "A", True)
item.add_item("tea", 8, "A", False)
