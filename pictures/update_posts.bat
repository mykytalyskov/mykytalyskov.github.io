@echo off
setlocal enabledelayedexpansion

set IMG_DIR=new
set BASE_DIR=/pictures
set POST_DIR=%CD%/_posts

cd /d %IMG_DIR%

set /a COUNTER=0

set MYDATE=!date:~10,4!-!date:~4,2!-!date:~7,2!

for %%f in (*.*) do (
	set IMG_PATH=%BASE_DIR%/%IMG_DIR%/%%f
	set /a COUNTER+=1
	set IMG_TITLE=!COUNTER!
	
	REM align nums: add zero before nums that < 10
	set COUNTER_NEW=000000!COUNTER!
	set MD_FILE_NAME=%MYDATE%-!COUNTER_NEW:~-2!.md
	
	echo !MD_FILE_NAME!
	echo !IMG_TITLE!
	echo !IMG_PATH!

	call :WritePost !MD_FILE_NAME! !IMG_TITLE! !IMG_PATH!
)

pause

goto End

REM we can't set from command line 'Run task as soon as possible'
REM do reset every 24th day
:WritePost
	set MD_FILE_NAME=%1
	set IMG_TITLE=%2
	set IMG_PATH=%3
	REM echo %CD% "%POST_DIR%/!MD_FILE_NAME!"
	echo --- > "%POST_DIR%/!MD_FILE_NAME!"
	echo layout: main >> "%POST_DIR%/!MD_FILE_NAME!"
	echo title: %IMG_TITLE% >> "%POST_DIR%/!MD_FILE_NAME!"
	echo published: true >> "%POST_DIR%/!MD_FILE_NAME!"
	echo media_url: %IMG_PATH% >> "%POST_DIR%/!MD_FILE_NAME!"
	echo --- >> "%POST_DIR%/!MD_FILE_NAME!"
goto :eof

:End