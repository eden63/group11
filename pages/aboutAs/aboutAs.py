from flask import Blueprint, render_template, url_for

# about blueprint definition
aboutAs = Blueprint(
    'aboutAs',
    __name__,
    static_folder='static',
    static_url_path='/aboutAs',
    template_folder='templates'
)


# Routes
@aboutAs.route('/aboutAs')
def index():
    return render_template('aboutAs.html')
