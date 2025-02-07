from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
        return "home"

@app.route("/contacto")
def contacto():
        return "contacto"

@app.route("/acerca_de")
def acerca_de():
        return "acerca de"

