from YourEcoIndicators import app
from flask import Flask,jsonify
from YourEcoIndicators.FredData import FredChartsData

@app.route('/FredData/api/SP', methods=['GET'])
def get_tasks():
    x = FredChartsData.FredChartsData()
    return jsonify({'SP': x.getData()})