import math
class Pagination:
    def __init__(self, items=None, page_size=10):
        if items is None:
            self.items = []
        else:
            self.items = items
        self.page_size = page_size
        self.current_page = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)
       
    def get_visible_items(self):
        start = self.current_page * self.page_size
        end = start + self.page_size
        return self.items[start:end]
    
    def go_to_page(self, page_number):
        if page_number > (self.total_pages):
           raise ValueError("invalid page number")
        else:
           self.current_page = page_number - 1

    def first_page(self):
        self.current_page = 0
        return self
    def last_page(self):
        self.current_page = (self.total_pages -1)

    def next_page(self):
        self.current_page += 1
        return self
    
    def previous_page(self):
        self.current_page -= 1
        return self
    
    def __str__(self):
        return str(self.get_visible_items())
    
    

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)
print(str(p))


print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(10)
print(p.current_page + 1)
# Output: 7

p.go_to_page(0)
# Raises ValueError