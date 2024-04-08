from flask import Blueprint, render_template,url_for, request,jsonify
from utilities.db_manager import *
from datetime import datetime


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
    today = datetime.now().strftime('%Y-%m-%d')
    array_my_classes_today=[class_ for class_ in array_my_classes if class_['date'] >= today]
    array_my_classes_today.sort(key=lambda x: (x['date'], x['hour']))
    return render_template('myClasses.html', classes=array_my_classes_today)

@myClasses.route('/myClasses/remove-class', methods=['POST'])
def remove_class():
    requestData = request.get_json()
    print(requestData)
    classItem = {
        'date': requestData['date'],
        'hour': requestData['hour'],
        'coach': requestData['coach']
    }
    print(classItem)
    user=get_user_by_username(session['username'])
    if classItem in user['classes']:
        users_col.update_one({'username': session['username']}, {'$pull': {'classes': classItem}})
        update_leftClasses(user,1)
        return jsonify({'msg': 'השיעור הוסר בהצלחה', 'success': True})
    else:
        return jsonify({'msg': 'אירעה שגיאה במהלך ההסרה', 'success': False})

