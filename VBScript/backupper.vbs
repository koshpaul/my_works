Set fso = CreateObject("Scripting.FileSystemObject")
folderSource="C:\AlcoHelp2\"
folderDest="C:\symbols\bck"

if Right(folderSource,1)<>"\" Then folderSource=folderSource & "\"
if Right(folderDest,1)<>"\" Then folderDest=folderDest & "\"
If fso.FolderExists(folderSource) = True And fso.FolderExists(folderDest) = True Then
ShowSubFolders fso.GetFolder(folderSource)
'Здесь можем вывести сообщение о завершении работы программы
'Функция рекурсивного обхода папок
Sub ShowSubFolders(Folder)
      if Folder.Name=fso.GetFolder(folderSource).Name Then
        Set objFiles=fso.GetFolder(folderSource).Files
        For Each file In objFiles
           if fso.FileExists(folderDest & file.name)=True Then
           Set fl = fso.GetFile(folderDest & file.name)
           if file.DateLastModified > fl.DateLastModified Then fso.CopyFile folderSource & file.name, folderDest & file.name
           Else
           fso.CopyFile folderSource & file.name, folderDest & file.name
           End if
        Next
        Set objFiles=Nothing
      End If
'Перебираем подпапки
For Each Subfolder in Folder.SubFolders
     Set colFiles=SubFolder.Files
     For Each file In colFiles
        dir=file.Path
        dir=Replace(dir, folderSource, "")
        dir=Replace(dir, file.name, "")
         if fso.FolderExists(folderDest & dir)=False Then fso.CreateFolder(folderDest & dir)
         if fso.FileExists(folderDest & dir & file.name)=True Then
         Set fl = fso.GetFile(folderDest & dir & file.name)
         if file.DateLastModified > fl.DateLastModified Then fso.CopyFile folderSource & dir & file.name, folderDest & dir & file.name
         Else
         fso.CopyFile folderSource & dir & file.name, folderDest & dir & file.name
         End if
   '     WScript.Echo dir & " " & file.name
      Next
'Рекурсивно вызываем функцию для подпапок текущей папки
   ShowSubFolders Subfolder
  Next
End Sub
Else
WScript.Echo "Указанные каталоги не существуют! Исправьте ошибку"
End If
Set fso = Nothing

