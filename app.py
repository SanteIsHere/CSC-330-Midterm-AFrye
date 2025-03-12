"""
Name: app.py
Author: Asante Frye
Description: Flask application simulating a calculator
that can perform basic arithmetic operations with URL parameters.
"""

# Import Flask class and render_template to initialize app and render templates
from flask import Flask, render_template

# Initialize the application using the filename
app = Flask(__name__)

##### Define Routes for Operations #####


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/add/<int:a>/<int:b>")
def add(a: int, b: int):
    result: str = str(a+b)
    return render_template("add.html", a=a,
     b=b, result=result)

@app.route("/subtract/<int:a>/<int:b>")
def subtract(a: int, b: int):
    result: str = str(a-b)
    return render_template("subtract.html", a=a,
     b=b, result=result)

@app.route("/multiply/<int:a>/<int:b>")
def multiply(a: int, b: int):
    result: str = str(a*b)
    return render_template("multiply.html", a=a,
     b=b, result=result)

@app.route("/divide/<int:a>/<int:b>")
def divide(a: int, b: int):
    try:
        result: str = str(a/b)
    except ZeroDivisionError: # Handle zero division attempts
        return render_template("zero_div_err.html")
    return render_template("divide.html", a=a,
     b=b, result=result)

if __name__ == "__main__":
    app.run(debug=True)