import gpxpy
import datetime
import MySQLdb
import genjs
import os
import time as tim

ID=50004
flag=0

time_file=open('time','r+')
time=time_file.readline()
time_file.seek(0)
time_file.truncate()
#next_time=datetime.datetime.strftime(datetime.datetime.now(),'<%Y-%m-%d %H:%M:%S>')
cur=tim.time()
os.environ["TZ"]="Asia/Hong_Kong"
next_time=tim.strftime('<%Y-%m-%d %H:%M:%S>', tim.localtime(cur))
time_file.write(str(next_time))
time_file.close()

db=MySQLdb.connect()


cur = db.cursor()

cur.execute("SHOW TABLES FROM ")

cur.execute("SELECT DISTINCT Device_ID FROM ")
for row in cur.fetchall():
 if(row[0]!=0 and row[0]!=24465 and row[0]!=10211 and row[0]!=1634543477 and row[0]!=10311 and (row[0]!=50005 and row[0]!=10205 and row[0]!=50008 and row[0]!=10302 and row[0]!=10304 and row[0]!=10405)):
    ID=int(row[0])
    cur.execute("SELECT Lat,Longi,Battery,locTime FROM  WHERE Device_ID = %f && locTime > '%s' ORDER BY locTime"%(ID,time))

    school="___"
    teacher="___"
    if(row[0]>10100 and row[0]<10200):
        school="Sacred Heart Canossian College"
    elif(row[0]>10200 and row[0]<10300):
        school="Tsang Pik Shan Secondary School"
    elif(row[0]>10300 and row[0]<10400):
        school="Po Leung Kuk Ho Yuk Ching (1984) College"
    elif(row[0]>10400 and row[0]<10500):
        school="New Territories Heung Yee Kuk Yuen Long District Secondary School"
    elif(row[0]>10500 and row[0]<10600):
        school="Shueng Shui Government Secondary School"
    elif(row[0]>10600 and row[0]<10700):
        school="Pui Shing Catholic Secondary School"
    elif(row[0]>10700 and row[0]<10800):
        school="HKSKH Bishop Hall Secondary School"
    elif(row[0]>10800 and row[0]<10900):
        school="True Light Girls' College"
    elif(row[0]>10900 and row[0]<11000):
        school="Buddhist Mau Fung Memorial College"
    elif(row[0]>11000 and row[0]<11100):
        school="Lai King Catholic Secondary School"
    elif(row[0]>11100 and row[0]<11200):
        school="Buddhist Fat Ho Memorial College"
    elif(row[0]>50000 and row[0]<60000):
        school="MakerBay"
        teacher="Eddie Yung"

    gpx_file=""

    try:
        gpx_file = open('Device_%s.gpx'%(ID), 'r+')

    except Exception,e:
        print "gpx file does not exist, creating file"
        gpx_file = open('Device_%s.gpx'%(ID), 'w+')
        gpx_file.writelines("<?xml version='1.0' encoding='UTF-8'?>\n")
        gpx_file.writelines("<gpx version='1.1' creator='___,%s,1.0,%s,%s,ESN'\n>"%(school,teacher,row[0]))
        gpx_file.writelines("<metadata>\n")
        gpx_file.writelines("<link href='connect.garmin.com'>\n")
        gpx_file.writelines("<text>drifter  data</text>\n")
        gpx_file.writelines("</link>\n")
        gpx_file.writelines("<time>%s</time>\n"%(datetime.datetime.strftime(datetime.datetime.now(),'%Y-%m-%dT%H:%M:%SZ')))
        gpx_file.writelines("</metadata>\n")
        gpx_file.writelines("<trk>\n")
        gpx_file.writelines("<name>Xavier track</name>\n")
        gpx_file.writelines("<trkseg></trkseg></trk></gpx>")
        gpx_file.close()
        gpx_file = open('Device_%s.gpx'%(ID), 'r+')
        flag=1


    gpx = gpxpy.parse(gpx_file)

    gpx_file.seek(0)
    gpx_file.truncate()

    #Point=(gpxpy.gpx.GPXTrackPoint(2.1234, 5.1234, elevation=1234,time=datetime.datetime.now()))
    #print Point


    for track in gpx.tracks:
     name=track.name
     if(name=="Xavier track"):
      print "%s - ok"%ID
      for segment in track.segments:
       #print segment.points
       try:
        for row in cur.fetchall():
         if(row[0]>10 and row[1]>10):
          Point=(gpxpy.gpx.GPXTrackPoint(longitude=row[1],latitude=row[0],elevation=1234,time=datetime.datetime.strptime(row[3],'<%Y-%m-%d %H:%M:%S>')))
          segment.points.append(Point)
       except Exception as e:
          print e
    gpx_file.write(gpx.to_xml())
    gpx_file.close()

db.close()

if(flag==1):
    genjs.run()
