import csv
from sklearn import tree
from pathlib import Path

x= []
y= []
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_PATH = BASE_DIR / "Data.csv"

with open(DATA_PATH, 'r') as csvFile:
    data = csv.reader(csvFile)
    for line in data:
        x.append(line[0:3])
        y.append(line[3])

clf= tree.DecisionTreeClassifier()
clf= clf.fit(x, y)

new_data= [[190,89,43], [160,56,39]]
answer= clf.predict(new_data)


print(answer[0]) #must be male
print(answer[1]) #must be female