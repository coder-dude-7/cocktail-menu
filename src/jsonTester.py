import json

file = open('cocktailsWithCategories.json')

data = json.load(file)

file.close()

for i in data['cocktails'][0]['whisky']:
    print(i['name'])
    print(i['description'])
    print('----')
for i in data['cocktails'][1]['vodka']:
    print(i['name'])
    print(i['description'])
    print('----')
for i in data['cocktails'][2]['rum']:
    print(i['name'])
    print(i['description'])
    print('----')