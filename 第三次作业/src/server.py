from flask import Flask, redirect, url_for, request
from flask_cors import CORS
import json

app = Flask(__name__)
# 跨域
CORS(app)

user_dict = {}

@app.route('/login', methods=['POST', 'GET'])
def login(): # login函数，可根据传进来的用户名获取对应的流量信息
    if request.method == 'POST':
        userID = request.get_data(as_text = True)
        if userID in user_dict:
            pass
        else:
            user_dict[userID] = '0'
        return user_dict
    else:
        print('here\n')
        return 'here\n'

@app.route('/disconnect', methods=['POST', 'GET'])
def disconnect(): # disconnect函数，可根据传进来的刘来增加流量值，每次增加2.2G
    if request.method == 'POST':
        userID = request.get_data(as_text = True)
        val = float(user_dict[userID])
        val += 5
        user_dict[userID] = str(val)
        return user_dict[userID]
    else:
        print('here\n')
        return 'here\n'
if __name__ == '__main__':
    app.run()