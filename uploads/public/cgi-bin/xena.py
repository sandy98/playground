#!/usr/bin/env python2

import os, sys

filename = '/home/ernesto/programas/git-projects/propios/playground/uploads/public/img/xenastand2.jpg'

sys.stdout.write('Content-Type: image/jpg\n')
sys.stderr.write("Content-Length: 'Ya veremos'\n")
sys.stdout.write(open(filename, 'rb').read())
