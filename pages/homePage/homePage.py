from flask import Blueprint, render_template, url_for

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
    return render_template('homePage.html')
