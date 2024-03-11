from flask import Blueprint, render_template, url_for

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
@signIn.route('/signIn', methods = ['GET','POST'])
def index():
    return render_template('signIn.html')
