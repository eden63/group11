from flask import Blueprint, render_template,redirect, url_for, request
from utilities.db_manager import *
# about blueprint definition
homePage = Blueprint(
    'homePage',
    __name__,
    static_folder='static',
    static_url_path='/homePage',
    template_folder='templates'
)

# Routes
@homePage.route('/homePage')
def index():
    user=get_user_by_username(session['usersname'])
    return render_template('homePage.html',user=user)
