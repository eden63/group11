from flask import Blueprint, render_template

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
    return render_template('myClasses.html')
