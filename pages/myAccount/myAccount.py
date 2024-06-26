from flask import Blueprint, render_template,redirect, url_for, request, session
from utilities.db_manager import *

#  blueprint definition
myAccount = Blueprint(
    'myAccount',
    __name__,
    static_folder='static',
    static_url_path='/myAccount',
    template_folder='templates'
)


# Routes
@myAccount.route('/myAccount')
def index():
    username=session['username']
    user = get_user_by_username(username)
    leftClasses = user['leftClasses']
    return render_template('myAccount.html', user=user, leftClasses=leftClasses)
    # return render_template('myAccount.html', user=user)
