from fredapi import Fred
import json
fred = Fred(api_key='cba0c1edc07e77c0823efbd66ed3faf0')
class  FredChartsData:
    def getData(self):
        timeSeries = fred.get_series('SP500').head()[0:]
        return timeSeries.to_json()
   

