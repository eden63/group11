from flask import Blueprint, render_template, url_for, jsonify
from datetime import date
from pymongo import MongoClient
from utilities.db_manager import *

# about blueprint definition
bookClass = Blueprint(
    'bookClass',
    __name__,
    static_folder='static',
    static_url_path='/bookClass',
    template_folder='templates'
)

def get_today_date():
    return str(date.today())


def get_month(date_string):
    # Parse the date string into a datetime object
    date_object = datetime.strptime(date_string, '%Y-%m-%d')

    # Get the month from the datetime object
    month = date_object.strftime('%B')

    return month


def get_day(date_string):
    # Parse the date string into a datetime object
    date_object = datetime.strptime(date_string, '%Y-%m-%d')

    # Get the day from the datetime object
    day = date_object.day

    return day

from datetime import datetime, timedelta

def get_next_day(date_string):
    # Convert the date string to a datetime object
    date_object = datetime.strptime(date_string, '%Y-%m-%d')

    # Add one day to the date using timedelta
    next_date = date_object + timedelta(days=1)

    # Format the new date as a string in the same format as the input
    next_date_string = next_date.strftime('%Y-%m-%d')

    return next_date_string
# Routes
@bookClass.route('/bookClass')
def index():
    list_of_classes = get_classes(get_today_date())
    today=get_today_date()
    month=get_month(today)
    day=get_day(today)
    return render_template('bookClass.html', classes=list_of_classes,month=month,day=day)

@bookClass.route('/bookClass/<date>')
def next_classes(date):
    print(f"Received date: {date}")  # Log the received date
    classes_for_next_day = get_classes(date)
    for cls in classes_for_next_day:
        cls['_id'] = str(cls['_id'])
    print(f"Returning classes: {classes_for_next_day}")  # Log the returned classes
    classes_json = jsonify(classes_for_next_day)
    return classes_json

