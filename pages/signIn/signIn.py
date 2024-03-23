from flask import Blueprint, render_template,redirect, url_for, request
from utilities.db_manager import *

# about blueprint definition
signIn = Blueprint(
    'signIn',
    __name__,
    static_folder='static',
    static_url_path='/signIn',
    template_folder='templates'
)

# Routes
@signIn.route('/')
@signIn.route('/signIn')
def index():
    return render_template('signIn.html')

@signIn.route('/signIn', methods = ['POST'])
def signIn_user():
    username = request.form.get('username')
    if check_if_registered(username):
        user = get_user_by_username(request.form.get('username'))
        if user['password'] == request.form.get('password'):
            session['username'] = request.form.get('usersname')
            session['logged_in'] = True
            return render_template('homePage.html', user=user)
        else:
            msg = 'סיסמה לא נכונה, אנא נסה שוב'
            return render_template("signIn.html", msg=msg)
    else:
        msg = 'שם משתמש לא קיים, אנא נסה שוב'
        return render_template("signIn.html", msg=msg)

    return render_template("signIn.html", msg="")




