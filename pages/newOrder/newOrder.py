from flask import Blueprint, render_template

# about blueprint definition
newOrder = Blueprint(
    'newOrder',
    __name__,
    static_folder='static',
    static_url_path='/newOrder',
    template_folder='templates'
)


# Routes
@newOrder.route('/newOrder')
def index():
    return render_template('newOrder.html')
