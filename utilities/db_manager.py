import os
from settings import mongoDB
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask import jsonify, session


# create cluster
client = MongoClient(mongoDB['uri'], server_api=ServerApi('1'), tls=True, tlsAllowInvalidCertificates=True)

# get all dbs and collections that needed
DB = client['PiLoveDB']
users_col = DB['users']
payments_col=DB['payments']


##user collection functions
##user exists
def check_if_registered( username):
    if get_user_by_username(username):
        return True
    return False

def get_user_by_username(username):
    return users_col.find_one({'username': username})
def get_users():
    return list(users_col.find())

def get_pass(username):
    user=get_user_by_username(username)
    return user['password']

def create_user(username,password, phone, fullName, email):
    new_user = {
        'username': username,
        'password': password,
        'phone': phone,
        'fullName': fullName,
        'email': email,
        'leftClasses':0
    }
    users_col.insert_one(new_user)


####PAYMENTS
def create_payment(username,password,number,CardNumber,expirationDate,cvv,fullName,idNumber):
    new_payment = {
        'username': username,
        'password': password,
        'number': number,
        'CardNumber': CardNumber,
        'expirationDate': expirationDate,
        'cvv': cvv,
        'fullName': fullName,
        'idNumber': idNumber
    }
    payments_col.insert_one(new_payment)

