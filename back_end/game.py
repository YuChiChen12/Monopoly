from flask import jsonify
import json
# Input json：
    # "squad_num"
    # "stop_num"
    # "game_gain"
    # "chance"
    # "add_asset"


# Output json：
    # "squad_num"
    # "stop_num"
    # "cash_per_squad"
    # "bankrupt"
    # "bankrupt_time_per_squad"
    # "asset_per_stop"
    # "toll_per_stop"
    # "total_value"
    
class Game():
    # 初始值
    def __init__(self):
        # 幾小 哪一關
        self.squad_num = 0
        self.stop_num = 0
        # cash_per_squad：每隊現金 (1D array)
        self.cash_per_squad = []
        for _ in range(8):
            self.cash_per_squad.append(5000)
        # bankrupt：小隊這次是否破產
        self.bankrupt = 0
        # bankrupt_time_per_squad：每隊破產次數 (1D array)
        self.bankrupt_time_per_squad = []
        for _ in range(8):
            self.bankrupt_time_per_squad.append(0)
        # asset_per_stop：每隊在各關的房地產數量 (2D array)
        self.asset_per_stop = [[0 for _ in range(8)] for _ in range(15)]
        # toll_per_stop：每隊經過各關的過路費 (2D array)
        self.toll_per_stop = [[0 for _ in range(8)] for _ in range(15)]
        # total_value：各小隊的 (1D array)
        self.total_value = []
        for _ in range(8):
            self.total_value.append(0)


    # 遊戲獎金 & 機會/命運 & 過路費
    def record(self, data):
        self.squad_num = data['squad_num']
        self.stop_num = data['stop_num']
        self.cash_per_squad[data['squad_num']-1] += data['game_gain'] + data['chance'] - self.toll_per_stop[data['stop_num']-1][data['squad_num']-1]
        # 破產(收過路費後手上現金沒了)
        if self.cash_per_squad[data['squad_num']-1] < 0:
            self.cash_per_squad[data['squad_num']-1] = 5000
            self.bankrupt_time_per_squad[data['squad_num']-1] += 1
            self.bankrupt = 1
            return self.get_state()
        else:
            self.bankrupt = 0
             # 把過路費分給各小隊
            for i in range(8):
                if i != (data['squad_num']-1):
                    self.cash_per_squad[i] += 1000 * self.asset_per_stop[data['stop_num']-1][i]
            # 置產
            if(data['add_asset'] != 0):
                self.asset_per_stop[data['stop_num']-1][data['squad_num']-1] += data['add_asset']
                for i in range(8):
                    if i != (data['squad_num']-1):
                        self.toll_per_stop[data['stop_num']-1][i] += 1000 * data['add_asset']
                if data['add_asset'] == 1:
                    self.cash_per_squad[data['squad_num']-1] -= 500
                elif data['add_asset'] == 2:
                    self.cash_per_squad[data['squad_num']-1] -= 1300
                elif data['add_asset'] == 3:
                    self.cash_per_squad[data['squad_num']-1] -= 2500
            # 算每小總資產
            for i in range(8):
                self.total_value[i] = 0
                for j in range(15):
                    if i==1 | i==2:
                        if j==3 | j==9 | j==14:
                            self.total_value[i] += self.asset_per_stop[j][i]*2000
                        else:
                            self.total_value[i] += self.asset_per_stop[j][i]*1500
                    elif i==3 | i==4:
                        if j==2 | j==8 | j==13:
                            self.total_value[i] += self.asset_per_stop[j][i]*2000
                        else:
                            self.total_value[i] += self.asset_per_stop[j][i]*1500
                    elif i==5 | i==6:
                        if j==1 | j==6 | j==12:
                            self.total_value[i] += self.asset_per_stop[j][i]*2000
                        else:
                            self.total_value[i] += self.asset_per_stop[j][i]*1500
                    else:
                        if j==0 | j==5 | j==11:
                            self.total_value[i] += self.asset_per_stop[j][i]*2000
                        else:
                            self.total_value[i] += self.asset_per_stop[j][i]*1500
                self.total_value[i] += self.cash_per_squad[i]
            return self.get_state()
    
    def data_processing(self, data):
        data = json.loads(data)
        for key, value in data.items():
            data[key] = int(value)
        return self.record(data)





    # def get_state(self): // client output
    def get_state(self):
        # Debug：
        # print('after：', json.dumps({
        #     "squad_num": self.squad_num,
        #     "stop_num": self.stop_num,
        #     "cash_per_squad": self.cash_per_squad,
        #     "bankrupt_time_per_squad": self.bankrupt_time_per_squad,
        #     "bankrupt": bankrupt,
        #     "asset_per_stop": self.asset_per_stop,
        #     "toll_per_stop": self.toll_per_stop
        # }))
        return json.dumps({
            "squad_num": self.squad_num,
            "stop_num": self.stop_num,
            "cash_per_squad": self.cash_per_squad,
            "bankrupt_time_per_squad": self.bankrupt_time_per_squad,
            "bankrupt": self.bankrupt,
            "asset_per_stop": self.asset_per_stop,
            "toll_per_stop": self.toll_per_stop,
            "total_value":self.total_value
        })
    

if __name__ == "__main__":
    x = Game()
    print(x.get_state())