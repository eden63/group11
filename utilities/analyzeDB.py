from utilities.db_manager import *

### printing the DB object
## print all documents in the collection

# print all documents in the users collection
print("Users collection:")
for doc in DB.users.find():
    print(doc)
print()

# print all documents in the payments collection
print("Payments collection:")
for doc in DB.payments.find():
    print(doc)
print()

# print all documents in the classes collection
print("Classes collection:")
for doc in DB.classes.find():
    print(doc)
print()