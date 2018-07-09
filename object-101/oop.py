class Contact(object):
    def __init__(self, params):
        # self.first_name = first
        # self.middle_name = middle
        # self.last_name = last
        # self.phone = phone
        self.attributes = params

    def first(self):
        return self.get_attr('first')

    def middle(self):
        return self.get_attr('middle')

    def last(self):
        return self.get_attr('last')

    def phone(self):
        return self.get_attr('phone')

    def as_string(self):
        return "%s %s %s: %s" % (self.first(), self.middle(), self.last(), self.phone())

    def get_attr(self, attr):
        if attr in self.attributes:
            return self.attributes[attr]
        else:
            return ''

contact = Contact({
    'first': 'Xavier',
    'middle': 'Marcus',
    'last': 'Duncan',
    'phone': '404618LABS'
})

class Phonebook(object):
    #Stores list of Contact
    def __init__(self):
        self.contacts = []
    
    def add(self, contact):
        self.contacts.append(contact)

    def as_string(self):
        string = ''
        for contact in self.contacts:
            string += contact.as_string() + '\n'

        return string

    # def remove():
    #     ...

    # def sort():
    #     ...

    # def lookup():
    #     ...

    # def lookup_email():
    #     ...

    # def lookup_name():
    #     ...

phonebook = Phonebook()
contact = Contact({
    'first': 'Xavier',
    'middle': 'Marcus',
    'last': 'Duncan',
    'phone': '404618LABS'
})

phonebook.add(contact)
print phonebook.as_string()

# Pygame Inherentance
# Build a game utilizing inherentance. Turn based text games!!!
class Character(object):
    def __init__(self):
        self.alive = True

    def kill(self):
        self.alive = False

class Hero(Character):
    def greet(self):
        if self.alive:
            print "I'm alive!"
        else:
            print "Dying"

class Enemy(Character):
    def greet(self):
        print "Hssss"

enemy = Enemy()
