from flask import Blueprint, render_template,redirect, url_for, request
from utilities.db_manager import *

# about blueprint definition
newOrder = Blueprint(
    'newOrder',
    __name__,
    static_folder='static',
    static_url_path='/newOrder',
    template_folder='templates'
)

@newOrder.route('/newOrder')
def index():
    return render_template('newOrder.html')

# Routes
@newOrder.route('/newOrder',methods = ['POST'])
def newOrder_form():
    user = get_user_by_username(session['username'])
    username = user['username']
    password= user['password']
    # password = get_pass(session['username'])
    create_payment(username,password,
                    request.form.get('number'),
                    request.form.get('CardNumber'),
                    request.form.get('expirationDate'),
                    request.form.get('cvv'),
                    request.form.get('fullName'),
                    request.form.get('idNumber')
        )
    leftClasses=update_class(request.form.get('number'))
    user=get_user_by_username(session['username'])
    message = "הזמנה בוצעה בהצלחה"
    return render_template('myAccount.html', user=user,msg=message,leftClasses=leftClasses)

def update_class(classes):
    username = get_user_by_username(session['username'])
    leftClasses = int(username['leftClasses']) + int(classes)
    users_col.update_one({'username': session['username']}, {'$set': {'leftClasses': leftClasses}})
    return leftClasses


