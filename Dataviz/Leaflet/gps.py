import gpxpy
import datetime
import MySQLdb

time_file=open('time','r+')
time=time_file.readline()
time_file.seek(0)
time_file.truncate()
next_time=datetime.datetime.strftime(datetime.datetime.now(),'<%Y-%m-%d %H:%M:%S>')
time_file.write(str(next_time))
time_file.close()

db=MySQLdb.connect(host="HOST",user="USER",passwd="PASSWORD")


cur = db.cursor()

cur.execute("SHOW TABLES FROM ____")

cur.execute("SELECT DISTINCT Device_ID FROM _________")
for row in cur.fetchall():
 if(row[0]!=0 and row[0]!=24465):
    ID=int(row[0])
    cur.execute("SELECT Lat,Longi,Battery,locTime FROM _________ WHERE Device_ID = %f && locTime > '%s' ORDER BY locTime"%(ID,time))

    gpx_file=""

    try:
        gpx_file = open('Device_%s.gpx'%(ID), 'r+')

    except Exception,e:
        print "gpx file does not exist, creating file"
        gpx_file = open('Device_%s.gpx'%(ID), 'w+')
        gpx_file.writelines("<?xml version='1.0' encoding='UTF-8'?>\n")
        gpx_file.writelines("<gpx version='1.1' creator='drifter'\n")
        gpx_file.writelines("xmlns='http://www.topografix.com/GPX/1/1'\n")
        gpx_file.writelines("xmlns:gpxtpx='http://www.garmin.com/xmlschemas/TrackPointExtension/v1'\n")
        gpx_file.writelines("xmlns:gpxx='http://www.garmin.com/xmlschemas/GpxExtensions/v3' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>\n")
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


    gpx = gpxpy.parse(gpx_file)

    gpx_file.seek(0)
    gpx_file.truncate()

    #Point=(gpxpy.gpx.GPXTrackPoint(2.1234, 5.1234, elevation=1234,time=datetime.datetime.now()))
    #print Point


    for track in gpx.tracks:
     name=track.name
     if(name=="Xavier track"):
      print "ok"
      for segment in track.segments:
       #print segment.points
       try:
        for row in cur.fetchall():
         if(row[0]>0 and row[1]>0):
          Point=(gpxpy.gpx.GPXTrackPoint(longitude=row[1],latitude=row[0],elevation=1234,time=datetime.datetime.strptime(row[3],'<%Y-%m-%d %H:%M:%S>')))
          segment.points.append(Point)
       except Exception as e:
          print e
    gpx_file.write(gpx.to_xml())
    gpx_file.close()

db.close()
