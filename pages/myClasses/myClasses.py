from flask import Blueprint, render_template,url_for
from utilities.db_manager import *

# about blueprint definition
myClasses = Blueprint(
    'myClasses',
    __name__,
    static_folder='static',
    static_url_path='/myClasses',
    template_folder='templates'
)


# Routes
@myClasses.route('/myClasses')
def index():
    user = get_user_by_username(session['username'])
    array_my_classes = get_user_classes(user)
    return render_template('myClasses.html', classes=array_my_classes)