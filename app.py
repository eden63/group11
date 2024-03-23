from flask import Flask
from utilities.db_manager import *


###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

#session
app.secret_key='123'

##pages
## AboutUs
from pages.aboutAs.aboutAs import aboutAs
app.register_blueprint(aboutAs)

##bookClass
from pages.bookClass.bookClass import bookClass
app.register_blueprint(bookClass)

##homePage
from pages.homePage.homePage import homePage
app.register_blueprint(homePage)

##myAccount
from pages.myAccount.myAccount import myAccount
app.register_blueprint(myAccount)

##myClasses
from pages.myClasses.myClasses import myClasses
app.register_blueprint(myClasses)

##newOrder
from pages.newOrder.newOrder import newOrder
app.register_blueprint(newOrder)

##signIn
from pages.signIn.signIn import signIn
app.register_blueprint(signIn)

##signUp
from pages.signUp.signUp import signUp
app.register_blueprint(signUp)

###### Components
##header
from components.header.header import header
app.register_blueprint(header)
