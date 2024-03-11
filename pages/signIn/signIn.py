from flask import Blueprint, render_template

# about blueprint definition
signIn = Blueprint(
    'signIn',
    __name__,
    static_folder='static',
    static_url_path='/signIn',
    template_folder='templates'
)


# Routes
@signIn.route('/signIn')
def index():
    return render_template('signIn.html')
