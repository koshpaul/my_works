start = 5
fname = "C"
 
Do While start>1

Set fso = CreateObject("Scripting.FileSystemObject") 
FolderPath = "C:\spool\"
Set objFolder = fso.GetFolder(FolderPath)
Set colFiles = objFolder.Files
Set sh = CreateObject("WScript.Shell")
 
For Each objFile in colFiles
    If (InStr(1,objFile.Name,"pdf")>0) Then
       If (objFile.Size>0) Then
           On Error Resume Next
           Do
           Err.Clear
          fname = FolderPath & objFile.Name
          fso.MoveFile FolderPath & objFile.Name, FolderPath & objFile.Name
          If Err=0 Then
            sh.Run "SumatraPDF.exe -print-to-default """ & fname & """", 0, True
            fso.DeleteFile fname ,true
          End If
        Loop Until Err.Number = 0
        On Error Goto 0
       End If
    End If
Next

Set sh = Nothing
WScript.Sleep 1000
Set fso = Nothing
Loop
