---
title: Image sequence
description: ...
---

## Create a new graphics
Creating a graphics file with an image sequence is more or less the same as creating any other graphics file. One difference is the importance of the choice of the time unit.

- Create a new graphics file.
- The new canvas settings dialog shows. Select the required framerate for proper playback of the image sequence(s) – **25 or 50 frames per second**.

> Note that **once the framerate is selected, it cannot be changed**. It is necessary to create a new graphic to change the framerate or time unit.

## Create an image sequence
- In the object panel click on **sequence**.
- File explorer open. Choose images and confirm.
- Uploading all the images takes a certain amount of time according to the size of the images and the internet connection.
- When an image sequence object is created, it appears as the new item in the objects tree in the left side panel. At the same time, items on the timeline are generated. Each animation item on the timeline represents one image of the sequence.
- The images are sorted by file name.
- Any number of image sequences can be added to one graphics file. However, it is necessary to keep in mind the increasing size of the graphic file. If it is too large, it is better to create more graphic files with individual sequences.

## Edit the image sequence
- Edit the image sequence object like any other object in the right sidebar tools – you can set its width, height, position, and other properties.
- Individual images of the sequence are edited similarly to the animations in the timeline, where their duration and start offset can be adjusted in the right sidebar tools.
- You can perform bulk actions on images. Multiple images can be selected by pressing **ctrl/cmd key and clicking** on the images in the timeline. It is also possible to select the first and last image by using the **shift key and clicking**, which also selects all images in between.
- Selected images can be removed from the sequence. The image sequence then contains empty spaces and nothing is playing in the scene at that moment of missing image in the sequence. To fill the gap, extend the duration of the previous image.

## Delete the image sequence
- The entire image sequence can be deleted in two ways, either by deleting the image sequence object in the left sidebar or by deleting all the images of the sequence.

## Export a graphics file
- Graphics file with an image sequence can be exported as a zip **package** or plain **HTML** with a link to an online image repository.
- In the case of a zip **package**, all images are exported in one folder. This option is recommended, as it ensures a problem-free playback speed of the image sequence and ensures independence on the internet connection when playing a sequence and accessing the images.
- In the case of a plain **HTML** export, an internet connection is always necessary to access the images to play.