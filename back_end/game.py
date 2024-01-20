from flask import jsonify
import json
# Input json：
    # "squad_num"
    # "stop_num"
    # "game_gain"
    # "extra_gain"
    # "chance"
    # "add_asset"

# Output json：
    # "cash_per_squad"
    # "bankrupt_time_per_squad"
    # "asset_per_stop"
    # "toll_per_stop"

class Game():
    # 初始值
    def __init__(self):
        # cash_per_squad：每隊現金 (1D array)
        self.cash_per_squad = []
        for _ in range(8):
            self.cash_per_squad.append(5000)

        # bankrupt_time_per_squad：每隊破產次數 (1D array)
        self.bankrupt_time_per_squad = []
        for _ in range(8):
            self.bankrupt_time_per_squad.append(0)

        # asset_per_stop：每隊在各關的房地產數量 (2D array)
        self.asset_per_stop = []   
        for _ in range(15):
            for i in range(8):
                self.asset_per_stop.append(0)
        
        # toll_per_stop：每隊經過各關的過路費 (2D array)
        self.toll_per_stop = []
        for _ in range(15):
            for i in range(8):
                self.toll_per_stop.append(0)

    # 遊戲獎金 & 機會/命運 & 過路費
    def gain_and_toll(self, data):
        # 破產(過路費>手上現金)
        if self.toll_per_stop[data['stop_num']][data['squad_num']] > self.cash_per_squad[data['squad_num']]:
            self.cash_per_squad[data['squad_num']] = 5000
            self.bankrupt_time_per_squad[['squad_num']] += 1
        # 置產前剩餘金額(收過路費後未破產)
        else:
            self.cash_per_squad[data['squad_num']] += data['game_gain'] + data['extra_gain'] + data['chance'] - self.toll_per_stop[data['stop_num']][data['squad_num']]

    # 置產
    def real_estate(self, data):
        self.asset_per_stop[data['stop_num']][data['squad_num']] += data['add_asset']
        for i in range(8):
            if (i+1) != data['squad_num']:
                self.toll_per_stop[data['stop_num']][i+1] += 1000 * data['add_asset']
        if data['add_asset'] == 1:
            self.cash_per_squad[data['squad_num']] -= 500
        elif data['add_asset'] == 2:
            self.cash_per_squad[data['squad_num']] -= 1300
        elif data['add_asset'] == 3:
            self.cash_per_squad[data['squad_num']] -= 2500
    
    # def process(str ...)  // client input
    def data_processing(self, json_string):
        data = json.parse(json_string)

        for key, value in data.items():
            data[key] = int(value)
        if data['id'] == 1:
            self.gain_and_toll(data)
        elif data['id'] == 2:
            self.real_estate(data)





    # def get_state(self): // client output
    def get_state(self):
        return jsonify({
            "cash_per_squad" : self.cash_per_squad,
            "bankrupt_time_per_squad" : self.bankrupt_time_per_squad,
            "asset_per_stop" : self.asset_per_stop,
            "toll_per_stop" : self.toll_per_stop
        })