# To Do List
## Mobile App
## Work Flow

1. There is Two Types of administrators:
  1. total administrators | Can add/delete track/s administrators ,can also add total administrators , can add tracks , can add rooms and Gateways attached to each room , can change his password
  1. track administrators | Can Add subject,subject schedule,lecturer to subject per his/her managed track/s , change his password
1. There is a lecturer
  1. The lecturer need to register [user name ,  password] then he can have two views:
    1. Session view where each student total attendance in session (real time).
    1. Course Attendance summary | each student and percentage of attendance | highlight students with less than 90% attendance.
1. There is a Device
  1. Each device is attached to a student where mechanism is as follow:
    1. Student need to enter name , email and phone Number when registering and a track associated to him.
    1. he will receive ID that he can enter in his BLE beacon.
    1. Subjects will be added to device automatically when track administrator add subject to the track.
1. There is a logging url that logs:
  1. RSSI
  1. beacon ID
  1. Timestamp
  1. Gateway

## Served Pages
* beacons logging pages   | Status : Done
* Admin logging Page      | Status : Done
* Total Admin Tools       | Status : To Do
* Track Admin Tools       | Status : To Do
* lecturer Login page     | Status : To Do
* lecturer Sessions view  | Status : To Do
* lecturer Session view   | Status : To Do
* lecturer course summary | Status : To Do
* Device Registration     | Status : To Do
* Provide Rich Dummy data to test the projects features | Status : To Do

## We need to add proof of concept page | After finishing Main Functionality

the main goal of this page simply to monitor device proximity from gateway live on the server and decision if device in session or out session
