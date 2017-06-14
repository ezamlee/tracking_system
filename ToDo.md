# To Do List
## Mobile App
## Work Flow

1. There is Two Types of administrators:
  2. total administrators | Can add/delete track/s administrators ,can also add total administrators , can add tracks , can add rooms and Gateways attached to each room , can change his password
  2. track administrators | Can Add subject,subject schedule,lecturer to subject per his/her managed track/s , change his password
1. There is a lecturer
  2. The lecturer need to register [user name ,  password] then he can have two views:
    3. Session view where each student total attendance in session (real time).
    3. Course Attendance summary | each student and percentage of attendance | highlight students with less than 90% attendance.
1. There is a Device
  2. Each device is attached to a student where mechanism is as follow:
    3. Student need to enter name , email and phone Number when registering and a track associated to him.
    3. he will receive ID that he can enter in his BLE beacon.
    3. Subjects will be added to device automatically when track administrator add subject to the track.
1. There is a logging url that logs:
  2. RSSI
  2. beacon ID
  2. Timestamp
  2. Gateway

## Served Pages
- [x] beacons logging pages   
- [X] Admin logging Page      
- [ ] Total Admin Tools      
- [ ] Track Admin Tools      
- [ ] lecturer Login page    
- [ ] lecturer Sessions view
- [ ] lecturer Session view  
- [ ] lecturer course summary
- [ ] Device Registration    
- [ ] Provide Rich Dummy data to test the projects features

## We need to add proof of concept page | After finishing Main Functionality

the main goal of this page simply to monitor device proximity from gateway live on the server and decision if device in session or out session
