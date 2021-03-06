import pdb

import sys as mod_sys
import logging as mod_logging
import math as mod_math

import gpxpy as mod_gpxpy

#mod_logging.basicConfig(level=mod_logging.DEBUG,
#                        format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s')




def format_time(time_s):
    if not time_s:
        return 'n/a'
    minutes = mod_math.floor(time_s / 60.)
    hours = mod_math.floor(minutes / 60.)

    return '%s:%s:%s' % (str(int(hours)).zfill(2), str(int(minutes % 60)).zfill(2), str(int(time_s % 60)).zfill(2))


def print_gpx_part_info(gpx_part, indentation=''):
    """
    gpx_part may be a track or segment.
    """
    length_2d = gpx_part.length_2d()
    #length_3d = gpx_part.length_3d()
    s=[('{}Length 2D: {:.3f}km'.format(indentation, length_2d / 1000.))]
    #print('{}Length 3D: {:.3f}km'.format(indentation, length_3d / 1000.))

    moving_time, stopped_time, moving_distance, stopped_distance, max_speed = gpx_part.get_moving_data()
    s+=[('%sMoving time: %s' % (indentation, format_time(moving_time)))]
    s+=[('%sStopped time: %s' % (indentation, format_time(stopped_time)))]
    #print('%sStopped distance: %sm' % stopped_distance)
    #print('{}Max speed: {:.2f}m/s = {:.2f}km/h'.format(indentation, max_speed if max_speed else 0, max_speed * 60. ** 2 / 1000. if max_speed else 0))

    uphill, downhill = gpx_part.get_uphill_downhill()
    #print('{}Total uphill: {:.2f}m'.format(indentation, uphill))
    #print('{}Total downhill: {:.2f}m'.format(indentation, downhill))

    start_time, end_time = gpx_part.get_time_bounds()
    s+=[('%sStarted: %s' % (indentation, start_time))]
    s+=[('%sEnded: %s' % (indentation, end_time))]

    points_no = len(list(gpx_part.walk(only_points=True)))
    s+=[('%sPoints: %s' % (indentation, points_no))]

    if points_no > 0:
        distances = []
        previous_point = None
        for point in gpx_part.walk(only_points=True):
            if previous_point:
                distance = point.distance_2d(previous_point)
                distances.append(distance)
            previous_point = point
        s+=[('{}Avg distance between points: {:.2f}m'.format(indentation, sum(distances) / len(list(gpx_part.walk()))))]

    return s


def print_gpx_info(gpx, gpx_file):
    #print('File: %s' % gpx_file)

    if gpx.name:
        print('  GPX name: %s' % gpx.name)
    if gpx.description:
        print('  GPX description: %s' % gpx.description)
    if gpx.author_name:
        print('  Author: %s' % gpx.author_name)
    if gpx.author_email:
        print('  Email: %s' % gpx.author_email)

    s=print_gpx_part_info(gpx)
    return s

    '''for track_no, track in enumerate(gpx.tracks):
        for segment_no, segment in enumerate(track.segments):
            print('    Track #%s, Segment #%s' % (track_no, segment_no))
            print_gpx_part_info(segment, indentation='        ')
    '''

def run(gpx_files):
    if not gpx_files:
        print('No GPX files given')
        #mod_sys.exit(1)

    for gpx_file in gpx_files:
        try:
            gpx = mod_gpxpy.parse(open(gpx_file))
            s=print_gpx_info(gpx, gpx_file)
	    return s
        except Exception as e:
            mod_logging.exception(e)
            print('Error processing %s' % gpx_file)
            mod_sys.exit(1)

if __name__ == '__main__':
    #run(mod_sys.argv[1:])
    run(gpx_files)
