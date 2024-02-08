str="." 
strComputer = "."
 Set objWMIService = GetObject("winmgmts:{impersonationLevel=impersonate}!\\" &  strComputer & "\root\cimv2")
 Set colProcessList = objWMIService.ExecQuery("Select * from Win32_Process where  Name='prowin32.exe'")
Set WSHShell = WScript.CreateObject("WScript.Shell")
 For Each objProcess in colProcessList
str=objProcess.CommandLine
if InStrRev(str,"atolobmen")>0 then WSHShell.Run "cmd /c taskkill /PID " & objProcess.ProcessID & " /F "
if InStrRev(str,"arc.w")>0 then WSHShell.Run "cmd /c taskkill /PID " & objProcess.ProcessID & " /F "
if InStrRev(str,"nws.w")>0 then WSHShell.Run "cmd /c taskkill /PID " & objProcess.ProcessID & " /F "
WScript.Sleep (1500)
if InStrRev(str,"nws.w")>0 then WSHShell.Run "C:\Users\Администратор\Desktop\News.lnk"
if InStrRev(str,"arc.w")>0 then WSHShell.Run "C:\Users\Администратор\Desktop\Arh.lnk"
if InStrRev(str,"atolobmen")>0 then WSHShell.Run "C:\Users\Администратор\Desktop\Обмен.lnk"
 Next
 Set colProcessList = objWMIService.ExecQuery("Select * from Win32_Process where  Name='FileMove.exe'")
 For Each objProcess in colProcessList
   WSHShell.Run "cmd /c taskkill /PID " & objProcess.ProcessID & " /F "
   WScript.Sleep (1000)
   WSHShell.Run "C:\Users\Администратор\Desktop\FileMove.exe.lnk"
 Next
 Set colProcessList=Nothing
WScript.Sleep (3000)
Set obj=CreateObject("Shell.Application")
obj.MinimizeAll
Set obj=Nothing
Set WSHShell = Nothing