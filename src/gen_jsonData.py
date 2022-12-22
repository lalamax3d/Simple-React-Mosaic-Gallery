import os,sys
import json

# generate json data for images in a folder
def gen_jsonData(folder, jsonFile, imgType):
    # get all files in the folder
    files = os.listdir(folder)
    # get all files with the specified type
    files = [f for f in files if f.endswith(imgType)]
    # get the number of files
    num = len(files)
    # generate json data
    data = {}
    data['images'] = []
    for i in range(num):
        data['images'].append({
            'src': files[i],
            'id': i
        })
        print ("processing image: " + files[i])
    # save json data
    with open(jsonFile, 'w') as f:
        json.dump(data, f)

gen_jsonData('../public/img','./images.json','.jpg')