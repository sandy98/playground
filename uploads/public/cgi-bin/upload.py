#!/usr/bin/env python2

import os, sys

#import cgi, cgitb
#cgitb.enable()


#form = cgi.FieldStorage()

data = sys.stdin.readline()

sys.stdout.write('Content-Type: text/html\n\n')
sys.stdout.write('<h2 style="text-align: center; color: #ff4400;">Hello, World!</h2>')
sys.stdout.write("<p>This is %s in a %s platform</p><hr/>" % (os.name, sys.platform))


sys.stdout.write("<p>Data is: %s</p>" % data.replace("\n", "<br/>"))

#if 'title' not in form:
#  sys.stdout.write("<p>You moron forgot to include the title!</p>")
#else:
#  sys.stdout.write("<p>The title is: %s</p>" % form['title'].value)





