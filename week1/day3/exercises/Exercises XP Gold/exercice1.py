class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius
    
    def compute_perimeter(self):
        print(2 * 3.14159 * self.radius)

    def compute_area(self):
        print(3.14159 * self.radius ** 2)

    def definition(self):
        print("A circle is a shape with all points equidistant from its center.")


circle1 = Circle(5)
circle1.compute_perimeter()
circle1.compute_area()
circle1.definition()