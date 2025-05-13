import math
import turtle

class Circle:

    def __init__(self, radius, diameter):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Provide either radius or diameter")
        self.diameter = self.radius * 2
    
    
    def area(self):
        return math.pi * self.radius ** 2

    
    def __str__(self):

        return f"Circle with radius: {self.radius}, diameter: {self.diameter}, area: {self.area()}"
    
    def __add__(self, other_cell):
        if isinstance(other_cell, Circle):
            return Circle(self.radius + other_cell.radius, None)
        else:
            raise TypeError("Can only add Circle objects")
        
    
    def __gt__(self, other_cell):
        if isinstance(other_cell, Circle):
            return self.radius > other_cell.radius
        else:
            raise TypeError("Can only compare Circle objects")
        
    def __eq__(self, other_cell):
        if isinstance(other_cell, Circle):
            return self.radius == other_cell.radius
        else:
            raise TypeError("Can only compare Circle objects")
        
    def __lt__(self, other_cell):
        if isinstance(other_cell, Circle):
            return self.radius < other_cell.radius
        else:
            raise TypeError("Can only compare Circle objects")
        
    def __le__(self, other_cell):
        if isinstance(other_cell, Circle):
            return self.radius <= other_cell.radius
        else:
            raise TypeError("Can only compare Circle objects")
    
    def __ge__(self, other_cell):
        if isinstance(other_cell, Circle):
            return self.radius >= other_cell.radius
        else:
            raise TypeError("Can only compare Circle objects")
        
    def __sort__(self):
        return self.radius
    


circle1 = Circle(radius=5, diameter=None)   
circle2 = Circle(radius=20, diameter=None)
circle_list = [circle1, circle2]
print(circle1)  
        

y = 0
for cercle in circle_list:
    y += cercle.diameter
    turtle.speed(1)
    turtle.hideturtle()
    turtle.penup()
    turtle.goto(0, y -circle1.radius)
    turtle.pendown()
    turtle.circle(circle1.radius)
    turtle.penup()

turtle.done()
        