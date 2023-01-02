import os,sys
import json

# generate json data for images in a folder
def gen_jsonData(folder, jsonFile, imgType,tags):
    # get all files in the folder
    files = os.listdir(folder)
    # get all files with the specified type
    files = [f for f in files if f.endswith(imgType)]
    # get the number of files
    num = len(files)
    # generate json data
    data = {}
    data['images'] = []
    dirname = folder.split('/')[-1]
    for i in range(num):
        data['images'].append({
            'id': i,
            'src': './img/'+dirname+'/'+files[i],
            'alt': files[i].split('.')[0],
            'tags':tags
        })
        print ("processing image: " + files[i])
    # save json data
    with open(jsonFile, 'w') as f:
        json.dump(data, f, indent=2)

gen_jsonData('../public/img/character','../public/img/character.json','.jpg','character,fantasy')
gen_jsonData('../public/img/toons','../public/img/toons.json','.jpg','character,toon,cute')
gen_jsonData('../public/img/fantasy','../public/img/fantasy.json','.jpg','fantasy')
gen_jsonData('../public/img/moodboard','../public/img/moodboard.json','.jpg','moodboard,concept')