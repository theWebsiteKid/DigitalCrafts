def game():
    class Character(object):
        def __init__(self):
            self.name = '<undefined>'
            self.health = 10
            self.power = 5
            self.coins = 20

        def alive(self):
            return self.health > 0
        
        def attack(self, enemy):
            # Hero attacks enemy
            enemy.receive_damage(self.infliction())
            if enemy.health <= 0:
                print "The enemy is dead."
            else:
                print "%s attacked %s" % (self.name, enemy.name)

        def infliction(self):
            return self.power
            
        def receive_damage(self, damage):
            self.health -= damage

    class Hero(Character):
        def __init__(self):
            # Hero Health + Power
            self.name = 'You'
            self.health = 10
            self.power = 5

    class Enemy(Character):
        def __init__(self):
            # Enemy Health + Power
            self.name = 'Enemy'
            self.health = 6
            self.power = 2

    hero = Hero()
    enemy = Enemy()

    while enemy.alive() and hero.alive():
        print "You have %d health and %d power." % (hero.health, hero.power)
        print "The enemy has %d health and %d power." % (enemy.health, enemy.power)
        print
        print "What do you want to do?"
        print "1. fight enemy"
        print "2. do nothing"
        print "3. flee"
        print "> ",
        input = raw_input()
        if input == "1":
            hero.attack(enemy)
        elif input == "2":
            pass
        elif input == "3":
            print "Your escape was successful!"
            break
        else:
            print "Invalid input: %r" % input
        enemy.attack(hero)
game()