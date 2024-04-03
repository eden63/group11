from flask import Blueprint, render_template, url_for
from datetime import date
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
# Routes
@bookClass.route('/bookClass')
def index():
    list_of_classes = get_classes(get_today_date())
    today=get_today_date()
    month=get_month(today)
    day=get_day(today)
    return render_template('bookClass.html', classes=list_of_classes,month=month,day=day)