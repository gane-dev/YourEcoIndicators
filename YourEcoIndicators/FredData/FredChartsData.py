from fredapi import Fred
fred = Fred(api_key='cba0c1edc07e77c0823efbd66ed3faf0')
class  FredChartsData:
    def getData(self):
     return fred.get_series('SP500')

