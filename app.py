from flask import Flask

app = Flask(__name__)

@app.route("templates/index.html")
def home():
        return "home"

@app.route("/")
def contacto():
        return "contacto"

@app.route("/")
def acerca_de():
        return "acerca de"

