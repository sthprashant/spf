import cv2
import time as t
import os
import numpy as np
import face_recognition

img_counter = 0
k = ''
cam = cv2.VideoCapture(0)
cv2.namedWindow("Register a Face")
ogPath = os.getcwd()
path = os.path.join(ogPath, 'Prashant')
print(path)
try:
    os.mkdir(path)
except OSError:
    print(OSError)

while True:
    if img_counter == 20:
        cam.release()
        cv2.destroyAllWindows()
        break
    ret, frame = cam.read()
    k = cv2.waitKey(1)
    cv2.imshow("Register a Face", frame)
    # frameRate = cam.get(5)
    img_name = "opencv_frame_{}.png".format(img_counter)
    cv2.imwrite(os.path.join(path, img_name), frame)
    #cv2.imwrite(os.path.join(path, img_name ), frame)
    print("{} written!".format(img_name))
    img_counter += 1