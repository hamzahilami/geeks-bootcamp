import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Provide either radius or diameter")
        self.diameter = self.radius * 2

    def area(self):
        return math.pi * self.radius ** 2

    def to_string(self):
        return f"Circle(radius={self.radius}, area={self.area():.2f})"

    def add_circle(self, other):
        return Circle(radius=self.radius + other.radius)

    def is_smaller_than(self, other):
        return self.radius < other.radius

    def is_equal_to(self, other):
        return self.radius == other.radius

def main():
    print("Circle Program")
    circle1 = Circle(radius=float(input("Enter radius of circle 1: ")))
    circle2 = Circle(radius=float(input("Enter radius of circle 2: ")))
    
    print("\nCircles created:")
    print(circle1.to_string())
    print(circle2.to_string())
    
    new_circle = circle1.add_circle(circle2)
    print("\nCombined circle:", new_circle.to_string())
    
    print("\nComparison:")
    print("Circle1 < Circle2:", circle1.is_smaller_than(circle2))
    print("Circle1 == Circle2:", circle1.is_equal_to(circle2))
    
    circles = sorted([circle1, circle2, new_circle], key=lambda c: c.radius)
    print("\nSorted circles:")
    for c in circles:
        print(c.to_string())

if __name__ == "__main__":
    main()