import argparse
from typing import Optional

from flask import Flask, jsonify, request
from game import Game

#
SERVER_RAISE_EXCEPTION = True

# Time unit: second
MAX_ACCU_TIME = -1

#
port: Optional[int] = None
host: Optional[str] = None
game = None
#
app = Flask(__name__)




@app.route('/', methods=['GET'])
def get_status():
    return game.get_state()


@app.route('/', methods=['POST'])
def set_entry():
    try:
        string_in = request.get_json()
        return game.data_processing(string_in)
    except Exception as e:
        if SERVER_RAISE_EXCEPTION:
            raise e
        print(e)
        return jsonify({'error': str(e)})



def get_args():
    global port, host
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=5000, help='The port of the server.')
    parser.add_argument('--host', type=str, default='0.0.0.0', help='The host of the server.')
    args = parser.parse_args()    
    port = args.port
    host = args.host


if __name__ == '__main__':
    get_args()
    game = Game()
    app.run(debug=False, host='0.0.0.0', port=port)