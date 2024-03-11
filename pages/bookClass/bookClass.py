from flask import Blueprint, render_template, url_for

# about blueprint definition
bookClass = Blueprint(
    'bookClass',
    __name__,
    static_folder='static',
    static_url_path='/bookClass',
    template_folder='templates'
)


# Routes
@bookClass.route('/bookClass')
def index():
    return render_template('bookClass.html')
