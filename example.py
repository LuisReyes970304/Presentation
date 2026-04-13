class Girl:
    def __init__(self, name: str, eyes_color: str):
        self.name = name
        self.eyes_color = eyes_color
        self.legs = "legs"

    def see(self):
        return f"{self.name} uses her beautiful {self.eyes_color} eyes to see"
    
    def walk(self):
        return f"{self.name} uses her {self.legs} to walk"
    

maria = Girl("Maria", "Blue")
print(maria.see())
print(maria.walk())
