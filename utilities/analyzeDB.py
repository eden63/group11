from utilities.db_manager import *

### printing the DB object
## print all documents in the collection

# print all documents in the users collection
def print_users():
    print("Users collection:")
    for doc in DB.users.find():
        print(doc)


# print all documents in the payments collection
def print_payments():
    print("Payments collection:")
    for doc in DB.payments.find():
        print(doc)


# print all documents in the classes collection
def print_classes():
    print("Classes collection:")
    for doc in DB.classes.find():
        print(doc)

