from flask import Blueprint, render_template

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
