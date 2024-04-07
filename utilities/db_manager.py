import os
from settings import mongoDB
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask import jsonify, session
from datetime import datetime, timedelta


# create cluster
client = MongoClient(mongoDB['uri'], server_api=ServerApi('1'), tls=True, tlsAllowInvalidCertificates=True)

# get all dbs and collections that needed
DB = client['PiLoveDB']
users_col = DB['users']
payments_col = DB['payments']
classes_col = DB['classes']


##user collection functions
##user exists
def check_if_registered(username):
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
        'leftClasses':0,
        'classes': []
    }
    users_col.insert_one(new_user)


def get_user_classes(user):
    return user['classes']

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

###CLASSES
def get_classes(date):
    classes=list(classes_col.find({"date":date}))
    return classes


def add_one_day(date_string):
    # Convert the date string to a datetime object
    date_object = datetime.strptime(date_string, '%Y-%m-%d')

    # Add one day to the date using timedelta
    new_date = date_object + timedelta(days=1)

    # Format the new date as a string in the same format as the input
    new_date_string = new_date.strftime('%Y-%m-%d')

    return new_date_string
def insert_class(date):
    for i in range(1, 31):
        # Check if a class already exists for this date
        existing_class = classes_col.find_one({'date': date})
        if existing_class is None:
            hours = ["16:00", "17:00", "18:00", "19:00"]
            for hour in hours:
                new_class = {
                    'date': date,
                    'hour': hour,
                    'coach': "תמי לוי"
                }
                classes_col.insert_one(new_class)
        date = add_one_day(date)


# insert_class("2024-04-05",)
