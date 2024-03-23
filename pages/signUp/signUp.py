from flask import Blueprint, render_template,redirect, url_for, request
from utilities.db_manager import *


# about blueprint definition
signUp = Blueprint(
    'signUp',
    __name__,
    static_folder='static',
    static_url_path='/signUp',
    template_folder='templates'
)


# Routes
@signUp.route('/signUp')
def index():
    return render_template('signUp.html')

@signUp.route('/signUp', methods = ['POST'])
def signUp_user():
    username = request.form.get('username')
    if not check_if_registered(username):
            create_user(request.form.get('username'),
                        request.form.get('password'),
                        request.form.get('phone'),
                        request.form.get('fullName'),
                        request.form.get('email')
                        )
            return redirect(url_for('signIn.index'))
    else:
            message = "שם משתמש כבר קיים במערכת, אנא בחר שם משתמש אחר"
            return render_template('signUp.html', msg=message)
    return render_template('signUp.html', msg='')