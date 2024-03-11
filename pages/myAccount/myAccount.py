from flask import Blueprint, render_template

# about blueprint definition
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
    return render_template('myAccount.html')
