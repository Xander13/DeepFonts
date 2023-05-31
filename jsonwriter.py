import json


#open file and read each images of fonts


#caluculate the data points and print to json format array


#write and formats to jason on txt file
with open('font_data.txt') as json_file:
    data = json.load(json_file)
    for p in data['fonts']:
        print('Font Name: ' + p['font_name'])
        print('Font Data: ' + p['f_data'])
        print('')
