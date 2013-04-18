#!/usr/bin/env coffee

cv = require 'opencv-node'
cap = new cv.VideoCapture 0
cv.namedWindow "Camera", 1


while true
  img = new cv.Mat
  cap.read img
  cv.imshow "Camera", img
  if cv.waitKey(27) >= 0
    break
    
    